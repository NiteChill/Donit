import { useParams } from 'react-router-dom';

export default function Todo() {
  const { name } = useParams();
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
