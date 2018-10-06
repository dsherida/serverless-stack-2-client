const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-j43dq9vrfo5a"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://ap1szxjgq2.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_TvDTXmJUy",
        APP_CLIENT_ID: "6stng9a2077jii9o3j36bslb4l",
        IDENTITY_POOL_ID: "us-east-1:a52ef563-b9a4-4d69-bc38-60f140987bf2"
    }
};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-miatrce27nno"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://qfr0mx9qq7.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_7zIIhCaB0",
        APP_CLIENT_ID: "2s3ivnu6oorqmdun4voc7qbv7k",
        IDENTITY_POOL_ID: "us-east-1:57eee9d8-1e83-4f11-a0db-c77c3306eff5"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
