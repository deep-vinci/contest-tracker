function UserTab({ user }) {
    return (
        <div className="w-11 h-11 flex justify-center items-center rounded-full hover:bg-gray-100 cursor-pointer">
            <img className="w-10 h-10 rounded-full" src={user.picture} />
        </div>
    );
}

export default UserTab;
