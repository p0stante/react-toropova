export const Review = ({user, text, rating }) => {
    return (
        <li >{user}: {text}  <span style={{ color: 'red' }}>{rating}</span></li>
    );
  };