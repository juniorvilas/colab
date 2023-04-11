import Image from 'next/image';
import * as S from './styles';
import { Props } from './types';
import dayjs from 'dayjs';
import { formatTruncateText } from 'utils/formatTruncateText';

export function CardUser({
  img,
  name,
  lastName,
  email,
  birthDate,
  address,
  phone
}: Props) {
  return (
    <S.Container>
      <Image
        style={{ borderRadius: '10px 10px 0 0' }}
        src={img}
        alt={img}
        width={200}
        height={200}
      />
      <S.Data>
        <S.Title>
          {name} {lastName}
        </S.Title>
        <S.Email>{formatTruncateText(email, 23)}</S.Email>
        <S.BirthDate>{dayjs(birthDate).format('DD/MM/YYYY')}</S.BirthDate>
        <S.Adress>{address}</S.Adress>
        <S.Phone>{phone}</S.Phone>
      </S.Data>
    </S.Container>
  );
}
