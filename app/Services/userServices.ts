import { Response } from "@adonisjs/core/build/standalone";
import Users from "App/Models/Users";
import Mongoose from 'mongoose'
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import Auth from "App/Middleware/Auth"
const auth = require('/Users/manishsingh/userManagement/app/Middleware/Auth.ts');
export default class userServices {
    static async createUser(name, emailId, password, applicationsId, groupId, rolesId, addedBY) {
        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds)
        let createUser = await Users.create({
            name: name,
            emailId: emailId,
            password: hash,
            applicationsId: applicationsId,
            groupId: groupId,
            rolesId: rolesId,
            addedBY: addedBY
        });

        return createUser;
    }
    static async updateUser(_id, name, emailId, applicationsId, groupId, rolesId) {
        // var time = {
        //     time: new Date(),
        //     name: modifiedBy
        // }
        const updateUser = await Users.findOne({ _id: _id });
        if (updateUser) {
            // // updateItem.other = value,
            // updateUser.updatedAt.push(time),
            (updateUser.name = name),
                (updateUser.name = name),
                (updateUser.emailId = emailId),
                (updateUser.name = name),
                (updateUser.applicationsId = applicationsId),
                (updateUser.groupId = groupId),
                (updateUser.rolesId = rolesId),
                await updateUser.save();
        }
        return
    }
    static async getUser(_id) {
        const getItem = await Users.findOne({ _id: _id });
        return getItem;
    }
    static async getUserList() {
        // let sortByQuery: {} = { _id: -1 | 1 }
        // if (sort_by_emailId) {
        //     sortByQuery = {}
        //     sortByQuery['emailId'] = sort_by_emailId === 'asc' ? 1 : -1
        // }

        // if (sort_by_updatedAt) {
        //     sortByQuery = {}
        //     sortByQuery['updatedAt.time'] = sort_by_updatedAt === 'asc' ? 1 : -1
        // }
        // if (sort_by_addedBY) {
        //     sortByQuery = {}
        //     sortByQuery['addedBY'] = sort_by_addedBY === 'asc' ? 1 : -1
        // }

        // let query = {}

        // if (emailId != '' && emailId != undefined) {
        //     query['emailId'] = new RegExp(emailId, 'i')
        // }

        const getUserList = await Users.find({ isActive: true },
            { _id: 1, name: 1, emailId: 1, password: 1, applicationsId: 1, groupId: 1, rolesId: 1, addedBY: 1 }
        )
        // .collation({ locale: 'en' })
        // .sort(sortByQuery)
        // .skip(offset)
        // .limit(limit)
        return getUserList;
    }
    static async deleteUser(_id) {
        const deleteUser = await Users.findOne({ _id: _id });
        if (deleteUser) {
            deleteUser.isActive = false;
            await deleteUser.save();
        }
        return deleteUser;
    }

    static async login(emailId, password) {
        // if (!emailId || password) {

        // }
        let token
        const user = await Users.findOne({ emailId: emailId });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
            user.tokens = user.tokens.concat({ token: token })
            await user.save()
            console.log(token, "sucess")
            if (isMatch) {
                console.log("sucess")
            }
            else {
                console.log("fail")
            }
        }

        return token;
    }

    static async logout(_id) {

    }

}
