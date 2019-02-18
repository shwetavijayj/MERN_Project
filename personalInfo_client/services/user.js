class userService {
    authenticateUser(UserData) {
        console.log("userdata", UserData);
        fetch("http://localhost:8080/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(UserData)
            }).then(response => response.json())
            .then(resData => {
                console.log("Updated User details", JSON.stringify(resData))
                return (JSON.stringify(resData));
            });

    }
    getUserData(UserData) {
        let promise = fetch("http://localhost:8080/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(UserData)
            });
        console.log("promise", promise);
        return promise;
    }

}

export default userService;