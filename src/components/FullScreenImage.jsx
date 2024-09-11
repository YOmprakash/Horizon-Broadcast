const FullScreenImage = ({ image }) => {
  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      
    </div>
  );
};

export default FullScreenImage;
