import axios from "axios";

const MessageCard = ({ message }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/delete/${message._id}`)
      .then((response) => {
        console.log("Message deleted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-2 mb-6 mx-auto" style={{ maxWidth: '500px' }}>
      <div className="flex flex-col">
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">From: {message.name}</h3>
            <p className="text-base text-gray-600">Email: {message.email}</p>
          </div>
          <div>
            <p className="text-xl text-gray-600">Type of Enquiry: {message.enquiry}</p>
            <p className="text-base text-gray-600">Coming from: {message.companyName}</p>
          </div>
        </div>
        <div className="mb-4" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          <p>{truncateText(message.message, 300)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base text-gray-600">Discovered us through: {message.channel}</p>
          <p className="text-base text-gray-600">Can be reached at: {message.phone}</p>
        </div>
        <button onClick={handleDelete} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-md w-24 mx-auto">Delete</button>
      </div>
    </div>
  );
};

export default MessageCard;
