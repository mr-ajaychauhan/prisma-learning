import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"] })

async function main() {

    //delete Many User in one query
    // await prisma.user.deleteMany()

    //create one data 


    // const createOne = await prisma.user.create({
    //     data: {
    //         name: "AJAY",
    //         email: "ajay@gmail.com",
    //         age: 20,
    //         UserPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     select: {
    //         name: true,
    //         UserPreference: {
    //             select: {
    //                 id: true,
    //             }
    //         }
    //     }
    // })
    // console.log(createOne);



    // create  many data 
    // const createMany = await prisma.user.createMany({
    //     data: [{
    //         name: "AJAY",
    //         email: "ajay@gmail.com",
    //         age: 20,
    //     },
    //     {
    //         name: "Vijay",
    //         email: "vijay@gmail.com",
    //         age: 18,
    //     },
    //     {
    //         name: "Vijay",
    //         email: "vijay2@gmail.com",
    //         age: 19,
    //     }
    //     ],
    // })
    // console.log(createMany);



    //find unique
    // const findUnique = await prisma.user.findUnique({
    //     where: {
    //         email: "vijay@gmail.com"
    //     }
    // })
    // console.log(findUnique);


    //findMany
    // const findMany = await prisma.user.findMany({
    //     where: {
    //         // email: "vijay@gmail.com"

    //         //check same equal value
    //         // name: { equals: "Vijay" }

    //         //check name not match
    //         // name: { not: "Vijay" },

    //         //check name match
    //         // name: { in: ["Vijay", "AJAY"] }

    //         //check not in data base 
    //         // name: { notIn: ["Vijay"] }

    //         // fetch acording to name and age
    //         // name: "Vijay",
    //         // age: { lt: 20 }


    //         //relation condition query
    //         // UserPreference: {
    //         //     emailUpdates: true,
    //         // }

    //         // writtenPosts: {
    //         //     // every: {
    //         //     //     createdAt: new Date()
    //         //     // },
    //         //     some: {
    //         //         title: { startsWith: "test" }
    //         //     }
    //         // }



    //     },
    //     //distent according to value 
    //     // distinct: ["name", "age"],

    //     //pagination
    //     //take print 2 value 
    //     // take: 2,
    //     // use with take skip 1 value
    //     // skip: 1,


    //     //order shorting
    //     orderBy: {
    //         age: "asc"
    //     }
    // })
    // console.log(findMany);

    //
    // const updateUser = await prisma.user.update({
    //     where: {
    //         email: "vijay@gmail.com"
    //     },
    //     data: {
    //         email: "vijay321@gmail.com"
    //     }



    // })
    // console.log(updateUser);

}

main()
    .catch(e => {
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$connect()
    })