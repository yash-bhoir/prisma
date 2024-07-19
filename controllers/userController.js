const prisma = require('../prisma/index');
const cookieToken = require('../utils/cookieToken');

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        console.log('Creating user with data:', { name, email, password });

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Create new user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
            }
        });

        console.log('User created:', user);

        // Set cookie and respond
        cookieToken(user, res);

    } catch (error) {
        console.error('Error in signup:', error);
        return res.status(500).json({ error: error.message });
    }
};
