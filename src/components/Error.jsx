

const Error = ({children}) => {
    return (
        <div className="bg-red-900 text-white
            text-center uppercase p-3 mb-3 rounded-md">
            <p>{children}</p>
        </div> 
    );
};

export default Error;