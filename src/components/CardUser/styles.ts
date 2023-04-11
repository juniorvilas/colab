import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  gap: 5px;
`;

export const Data = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  margin: 0 0 10px 10px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const Email = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export const BirthDate = styled(Email)``;

export const Adress = styled(Email)``;

export const Phone = styled(Email)``;
