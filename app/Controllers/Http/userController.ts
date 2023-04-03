import userServices from "App/Services/userServices";
import { http } from "Config/app";
import Users from "App/Models/Users";

const auth = require('/Users/manishsingh/userManagement/app/Middleware/Auth.ts');


export default class userController {
    public async createUser({ request, response, auth }) {
        let { name, emailId, password, applicationsId, groupId, rolesId, addedBY } = request.all();
        let createUser = await userServices.createUser(name, emailId, password, applicationsId, groupId, rolesId, addedBY);
        response.send({
            success: true,
            message: "user created",
            User: createUser,
        });
    }

    public async updateUser({ request, response }) {
        let { _id, name, emailId, applicationsId, groupId, rolesId } = request.all();
        let updateUser = await userServices.updateUser(_id, name, emailId, applicationsId, groupId, rolesId);
        response.send({
            success: true,
            message: "user updated",
            user: updateUser,
        });
    }
    public async getUser({ request, response }) {
        let { _id } = request.all();
        let getUser = await userServices.getUser(_id);
        response.send({
            success: true,
            user: getUser,
        });
    }
    public async getUserList({ request, response }) {
        let { } = request.all();
        let getUserList = await userServices.getUserList();
        response.send({
            success: true,
            getUserList: getUserList,
        });
    }
    public async deleteUser({ request, response }) {
        let { _id } = request.all();
        await userServices.deleteUser(_id);
        response.send({
            success: true,
            message: "user deleted",

        });
    }

    public async login({ request, response }) {
        let { emailId, password } = request.all()

        let user = await userServices.login(emailId, password);
        console.log(user, "juhjhhhhhhh")
        response.cookie('jwt', user, {
            expires: new Date(Date.now()),
            httpOnly: true

        })
        response.send({
            success: true,
            message: "dddd",

        });

    }
    public async logout({ request, response }) {
        let { _id } = request.all()


        // console.log(request.headers.Authorization)

        // if (request.headers && request.headers.authorization) {
        //     console.log(request.headers.authorization)
        // }
        await Users.findByIdAndUpdate({ _id: _id },
            { "$set": { "tokens": [] } }, { new: true })

        response.cookie('jwt', '', { maxAage: 1 })
        response.send({
            success: true,
            message: "dddd",

        });

    }



}
