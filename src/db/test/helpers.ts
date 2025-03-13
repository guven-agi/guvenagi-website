import { AppDataSource } from "@/data-source";
import { initDatabase } from "../db-manager";
import { User } from "../entities/User";
import { City } from "../entities/City";
import { SupportSubject } from "../entities/SupportSubject";
import { NGO } from "../entities/NGO";
import { Account } from "../entities/Account";
import { Contact } from "../entities/Contact";
import { HelpRequest } from "../entities/HelpRequest";
import { cities, dummyAccounts, dummyHelpRequests, dummyNGOs, dummyUsers, supportSubjects } from "./dummy-data";

export async function dummyFill() {
    await initDatabase();

    const userRepository = AppDataSource.getRepository(User);
    for (let i = 0; i < dummyUsers.length; i++) {
        const user = new User();
        const userData = dummyUsers[i];

        user.name = userData["name"];
        user.age = userData["age"];
        user.hardwareIdentifier = userData["hardwareIdentifier"];


        await userRepository.save(user);
    }

    const cityRepository = AppDataSource.getRepository(City);
    for (let i = 0; i < cities.length; i++) {
        const city = new City();
        const cityName = cities[i];

        city.id = i;
        city.name = cityName;

        await cityRepository.save(city);
    }

    const supportSubjectRepository = AppDataSource.getRepository(SupportSubject);
    for (let i = 0; i < supportSubjects.length; i++) {
        const supportSubject = new SupportSubject();
        const supportSubjectData = supportSubjects[i];

        supportSubject.name = supportSubjectData["name"];
        supportSubject.definitionText = supportSubjectData["definition"];


        await supportSubjectRepository.save(supportSubject);
    }

    const subjectRecords = await supportSubjectRepository.find();
    const ngosRepository = AppDataSource.getRepository(NGO);
    for (let i = 0; i < dummyNGOs.length; i++) {
        const ngo = new NGO();
        const ngoData = dummyNGOs[i];

        ngo.name = ngoData["name"];
        ngo.descriptionText = ngoData["description"];
        ngo.isVerified = true;

        ngo.contacts = []

        const dummyContact1 = new Contact();
        const dummyContact2 = new Contact();

        dummyContact1.contactNumber = "+905550" + Math.floor(100000 + Math.random() * 900000);
        dummyContact2.contactNumber = "+905550" + Math.floor(100000 + Math.random() * 900000);

        ngo.contacts.push(dummyContact1, dummyContact2);

        ngo.contacts = [...new Set(ngo.contacts)];

        ngo.supportSubjects = [];
        const subjectCount = Math.floor(Math.random() * 3) + 1;

        for (let j = 0; j < subjectCount; j++) {
            const subject = subjectRecords[Math.floor(Math.random() * subjectRecords.length)];
            ngo.supportSubjects.push(subject);
        }

        ngo.supportSubjects = [...new Set(ngo.supportSubjects)];

        await ngosRepository.save(ngo);
    }

    const ngos = await ngosRepository.find();
    const accountsRepository = AppDataSource.getRepository(Account);
    for (let i = 0; i < dummyAccounts.length; i++) {
        const account = new Account();
        const accountData = dummyAccounts[i];

        account.name = accountData["name"];
        account.email = accountData["email"];
        account.username = accountData["username"];
        account.password_encrypted = "<encrypted>password<encrypted>";
        account.organization = ngos[Math.floor(Math.random() * ngos.length)];

        await accountsRepository.save(account);
    }

    const cityRecords = await cityRepository.find();
    const userRecords = await userRepository.find();
    const requestsRepository = AppDataSource.getRepository(HelpRequest);
    for (let i = 0; i < dummyHelpRequests.length; i++) {
        const request = new HelpRequest();
        const requestData = dummyHelpRequests[i];

        request.city = cityRecords[Math.floor(Math.random() * cityRecords.length)];
        request.messageText = requestData["message"];
        request.user = userRecords[Math.floor(Math.random() * userRecords.length)]
        request.supportSubjects = [];

        const subjectCount = Math.round(Math.random() * 3) + 1;

        for (let j = 0; j < subjectCount; j++) {
            const subject = subjectRecords[Math.floor(Math.random() * subjectRecords.length)];
            request.supportSubjects.push(subject);
        }

        request.supportSubjects = [...new Set(request.supportSubjects)];

        await requestsRepository.save(request);
    }
}