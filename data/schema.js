const typeDefinitions = `
      type Query {
        product(_id: String): Product,
        products: [Product],
        reviewers: [Reviewer]
        reviewer(_id: String): Reviewer,
        posts: [Post],
        post(id: String): Post,
        users: [User],
        user(id: String): User
    }
    
    type Reviewer {
        _id: String,
        firstName : String,
        lastName: String,
        email: String
    }

    type Product {
        _id: String,
        name: String,
        brand: String,
        imageUrl: String,
        price: String,
        discountPrice: String,
        description: String,
        reviewers : [String],
        reviewersInfo: [Reviewer]
    }

    type Comment {
        postId: String,
        id: String,
        name: String,
        email: String,
        body: String
    }

    type User {
        id: String,
        name: String,
        username: String,
        email: String,
        phone: String
    }

    type Post {
        id: String,
        title: String,
        body: String,
        userId: String,
        commments: [Comment],
        user: User

    }
    schema {
        query: Query
    }
`;

export default [typeDefinitions];
