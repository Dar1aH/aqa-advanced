const UsersController = require('./controllers/UsersController')

describe('JSONPlaceholder API', () =>{
    test('Get all users list', async () =>{
        const response = await UsersController.getAllUsers()
        console.log(response.data)
        expect(response.status).toBe(200)
        expect(response.data.length).toEqual(10);
        response.data.forEach((user) => {
			expect(user).toEqual(
				expect.objectContaining({
					id: expect.any(Number),
					username: expect.any(String),
					email: expect.any(String),
					address: expect.any(Object),
					phone: expect.any(String),
					website: expect.any(String),
					company: expect.any(Object),
				}),
			);
		});
    })

    test('Get used by id and verify their address and company data', async () => {
        const userId = 10;
        const response = await UsersController.getUserById(userId)
        console.log(response.data);
		expect(response.status).toBe(200);
        expect(response.data).toEqual(
			expect.objectContaining({
				name: 'Clementina DuBuque',
				username: 'Moriah.Stanton',
				email: 'Rey.Padberg@karina.biz',
				phone: '024-648-3804',
			}),
		);

        expect(response.data.address).toEqual(
			expect.objectContaining({
				street: expect.any(String),
				suite: expect.any(String),
				city: expect.any(String),
				zipcode: expect.any(String),
				geo: expect.any(Object),
			}),
		);

        expect(response.data.company).toEqual(
			expect.objectContaining({
				name: expect.any(String),
				catchPhrase: expect.any(String),
				bs: expect.any(String),
			}),
		);
    })

    test('Add a new user', async () =>{
        const newUser = {
			name: 'Elon Musk',
			username: 'ElonOnMars',
			email: 'elon.musk@tesla.com',
			phone: '123-456-7890',
			website: 'tesla.com',
		};
        const response = await UsersController.createUser(newUser)
        console.log(response.data);
		expect(response.status).toBe(201);
        expect(response.data).toEqual(expect.objectContaining(newUser));
		expect(response.data.id).toBeDefined();

    })

    test('Add address to the new user', async () =>{
        const userId = 11;
		const userAddress = {
			street: '42 Mars Colony Ave',
			suite: 'Suite 101',
			city: 'Mars City',
			zipcode: '00000',
			geo: {
				lat: '-123.456',
				lng: '45.678',
			},
		};
        const response = await UsersController.updateUserAddress(userId, userAddress)
        console.log(response.data)
        expect(response.status).toBe(200)
        expect(response.data.address).toEqual(expect.objectContaining(userAddress));
    })

    test('Add company to the new user', async () =>{
        const userId = 11;
        const userCompany = {
            name: 'SpaceX',
            catchPhrase: 'Revolutionizing space travel',
            bs: 'space exploration and innovation',
        };
        const response = await UsersController.updateUserCompany(userId, userCompany)
        console.log(response.data)
        expect(response.status).toBe(200)
        expect(response.data.company).toEqual(expect.objectContaining(userCompany));

    })
})

