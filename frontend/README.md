# Scavngr - Earn As You Recycle ♻️

Scavngr is a blockchain-powered waste management platform that rewards users with tokens based on waste weight, ensuring transparency through supply chain tracking. The platform connects recyclers, collectors, and manufacturers in a circular economy ecosystem.

## 🌟 Key Features

- **Token Rewards System**: Earn SCV tokens based on waste contributions
- **Role-Based Access**: Three user roles - Recycler, Collector, Manufacturer
- **Supply Chain Transparency**: Track waste through the entire lifecycle
- **Wallet Integration**: Connect various crypto wallets
- **Real-time Dashboard**: Monitor tokens, waste, and transactions
- **Mobile-First Design**: Optimized for mobile devices

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with custom styling
- **Routing**: React Router DOM
- **State Management**: React Query + React Hooks
- **Authentication**: Firebase Auth

### Backend
- **Runtime**: Node.js + Express
- **Database**: Firebase Firestore
- **API**: RESTful endpoints
- **Deployment**: Vercel/Netlify ready

### Blockchain Integration
- **Wallet Support**: MetaMask, Starknet and more
- **Token System**: SCV (Scavngr) tokens
- **Smart Contracts**: Integrated via wallet connections

## 👥 User Roles

### 1. Recycler
- Register waste materials
- Transfer waste to collectors/manufacturers
- Earn tokens for waste contributions
- View supply chain history

### 2. Collector
- Collect waste from recyclers
- Transfer waste to manufacturers
- Manage waste inventory
- Earn tokens for collection services

### 3. Manufacturer
- Receive waste materials
- Process and utilize waste
- Complete waste lifecycle
- Manage token transactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project setup
- Web3 wallet (MetaMask, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Scavngr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
Scavngr/
├── client/                 # Frontend React application
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Radix UI primitives
│   │   └── modals/        # Various modal components
│   ├── pages/             # Route components
│   │   ├── Dashboard.tsx  # Main dashboard
│   │   ├── Tokens.tsx     # Token management
│   │   ├── Waste.tsx      # Waste management
│   │   └── *-settings.tsx # Role-specific settings
│   ├── src/
│   │   └── firebase.js    # Firebase configuration
│   ├── lib/               # Utility functions
│   └── hooks/             # Custom React hooks
├── server/                # Backend Express server
│   ├── routes/            # API routes
│   └── index.ts           # Server setup
├── shared/                # Shared code between client/server
├── public/                # Static assets
└── netlify/               # Netlify functions
```

## 🔧 Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Authentication and Firestore
3. Configure web app and get configuration keys
4. Update firebase.js with your credentials

### Wallet Integration
The platform supports multiple wallet providers:
- MetaMask
- Coinbase Wallet
- Phantom Wallet
- WalletConnect

### Styling
- **Primary Color**: Green gradient (#009933 to #0AFC5B)
- **Font**: Epilogue
- **Design System**: Tailwind CSS with custom components

## 📊 Key Functionalities

### Waste Management
- **Register Waste**: Log new waste materials with details
- **Transfer Waste**: Move waste between users in the supply chain
- **Reset Waste**: Clear waste records when processed
- **Confirm Waste**: Verify waste transactions

### Token System
- **Earn Tokens**: Get rewarded for waste contributions
- **Token History**: View transaction history
- **Wallet Integration**: Manage tokens through connected wallets
- **Donation System**: Support platform through token donations

### User Management
- **Role-based Access**: Different dashboards for each user type
- **Profile Management**: Update user information
- **Settings**: Customize application preferences

## 🚀 Deployment

### Vercel Deployment
```bash
npm run build
vercel --prod
```

### Netlify Deployment
```bash
npm run build
netlify deploy --prod
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]

```
## Figma Link
https://www.figma.com/design/8I1t0lqvNgFcghXVOudjpv/Scavenger?node-id=0-1&p=f&t=t3xkskC0GY7Ns9qg-0

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community
- Email: support@scavngr.com

## 🔗 Links

- [Live Demo](https://tubular-seahorse-cefca9.netlify.app/)
---

**Scavngr** - Transforming waste management through blockchain technology and token incentives. ♻️💰
