require('dotenv').config();

module.exports = {
  // Server Configuration
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiVersion: process.env.API_VERSION || 'v1',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3001',

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET || 'default-secret-change-me',
    expire: process.env.JWT_EXPIRE || '7d',
    refreshExpire: process.env.JWT_REFRESH_EXPIRE || '30d'
  },

  // Database Configuration
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    name: process.env.DB_NAME || 'deal_platform',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    pool: {
      max: parseInt(process.env.DB_POOL_MAX) || 20,
      min: parseInt(process.env.DB_POOL_MIN) || 5,
      acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
      idle: parseInt(process.env.DB_POOL_IDLE) || 10000
    }
  },

  // Redis Configuration
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD || null,
    db: parseInt(process.env.REDIS_DB) || 0
  },

  // Email Configuration
  email: {
    smtp: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    },
    from: process.env.EMAIL_FROM || 'noreply@dealplatform.com'
  },

  // AWS Configuration
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    s3Bucket: process.env.AWS_S3_BUCKET
  },

  // Affiliate API Keys
  affiliate: {
    bestbuy: {
      apiKey: process.env.BESTBUY_API_KEY
    },
    ebay: {
      appId: process.env.EBAY_APP_ID,
      certId: process.env.EBAY_CERT_ID,
      redirectUri: process.env.EBAY_REDIRECT_URI
    },
    walmart: {
      apiKey: process.env.WALMART_API_KEY
    },
    target: {
      apiKey: process.env.TARGET_API_KEY
    },
    amazon: {
      accessKey: process.env.AMAZON_ACCESS_KEY,
      secretKey: process.env.AMAZON_SECRET_KEY,
      associateTag: process.env.AMAZON_ASSOCIATE_TAG
    }
  },

  // Rate Limiting
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
    maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
  },

  // Security
  security: {
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS) || 12,
    sessionSecret: process.env.SESSION_SECRET || 'session-secret-change-me'
  },

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    filePath: process.env.LOG_FILE_PATH || './logs/app.log'
  },

  // Queue Configuration
  queue: {
    prefix: process.env.BULL_QUEUE_PREFIX || 'deal_platform',
    jobAttempts: parseInt(process.env.BULL_JOB_ATTEMPTS) || 3,
    jobBackoff: parseInt(process.env.BULL_JOB_BACKOFF) || 5000
  },

  // Job Intervals (in minutes)
  jobs: {
    priceSyncInterval: parseInt(process.env.PRICE_SYNC_INTERVAL_MINUTES) || 15,
    dealVerificationInterval: parseInt(process.env.DEAL_VERIFICATION_INTERVAL_MINUTES) || 30,
    alertCheckInterval: parseInt(process.env.ALERT_CHECK_INTERVAL_MINUTES) || 10
  },

  // Socket.IO
  socket: {
    corsOrigin: process.env.SOCKET_CORS_ORIGIN || 'http://localhost:3001'
  },

  // Pagination
  pagination: {
    defaultPageSize: parseInt(process.env.DEFAULT_PAGE_SIZE) || 20,
    maxPageSize: parseInt(process.env.MAX_PAGE_SIZE) || 100
  },

  // File Upload
  upload: {
    maxFileSize: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
    allowedImageTypes: (process.env.ALLOWED_IMAGE_TYPES || 'image/jpeg,image/png,image/webp').split(',')
  },

  // Deal Scoring Algorithm Weights
  dealScoring: {
    upvoteWeight: parseFloat(process.env.WEIGHT_UPVOTES) || 1.0,
    downvoteWeight: parseFloat(process.env.WEIGHT_DOWNVOTES) || -0.5,
    commentWeight: parseFloat(process.env.WEIGHT_COMMENTS) || 0.3,
    clickWeight: parseFloat(process.env.WEIGHT_CLICKS) || 0.2,
    ageDecayWeight: parseFloat(process.env.WEIGHT_AGE_DECAY) || 0.1
  }
};
