import { Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { formatPrice, formatDate } from '../../utils';
import OrderStatus from '../UI/OrderStatus/OrderStatus';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './CardMisOrdenesStyles';

const CardMisOrdenes = ({ createdAt, status, total, id }) => {
  const navigate = useNavigate();

  const createOrderAt = new Timestamp(
    createdAt.seconds,
    createdAt.nanoseconds
  ).toDate();
  console.log(createOrderAt);

  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {formatDate(createOrderAt)}hs</IdStyled>
        <PriceStyled>{formatPrice(total)}</PriceStyled>
      </TextContainerStyled>
      <OrderStatus status={status} />
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;
