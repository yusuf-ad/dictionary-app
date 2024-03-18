function ErrorMessage({ message }) {
  return (
    <div className="text-textColor text-center space-y-4">
      <h1 className="text-xl font-bold">No definitions found</h1>
      <p>{message} </p>
    </div>
  );
}

export default ErrorMessage;
