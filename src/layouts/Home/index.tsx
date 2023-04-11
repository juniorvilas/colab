import { useGetUsers } from 'hooks/useGetUsers';
import * as S from './styles';
import { CardUser } from 'components/CardUser';
import { Button } from '@mui/material';

export function HomePage() {
  const { data, incrementPage, decrementPage, isLoading, page } = useGetUsers({
    results: 9
  });

  console.log(data);

  if (isLoading) return <p>Carregando...</p>;
  return (
    <>
      <S.Title>Usuários</S.Title>
      <S.Container>
        {data?.results.map((user, index) => (
          <div key={index}>
            <CardUser
              name={user.name.first}
              img={user.picture.large}
              lastName={user.name.last}
              email={user.email}
              birthDate={user.dob.date}
              address={user.location.street.name}
              phone={user.phone}
            />
          </div>
        ))}
      </S.Container>
      <S.ContainerButton>
        <Button
          disabled={page === 1}
          variant="contained"
          onClick={decrementPage}
        >
          Anterior
        </Button>
        <Button variant="contained" onClick={incrementPage}>
          Proxima
        </Button>
      </S.ContainerButton>
    </>
  );
}
