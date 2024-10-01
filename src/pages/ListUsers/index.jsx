import api from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


import { Button } from "../../components/Button/style"
import TopBackground from "../../components/TopBackground"
import { Title } from "../../components/Title/style"
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from "./style"
import Trash from "../../assets/trash.svg"

function ListUser() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios');

            setUsers(data)
        }

        getUsers();

    }, []);

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    return (
        <Container>
            <Title>Listagem de Usuários</Title>
            <TopBackground></TopBackground>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />

                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>

                        <TrashIcon src={Trash} alt="Icon lixo" onClick={() => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )

}

export default ListUser