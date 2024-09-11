const FullScreenImage = ({ image }) => {
  return (
    <div
      className="h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${image})` }}
    >
      
    </div>
  );
};

export default FullScreenImage;
