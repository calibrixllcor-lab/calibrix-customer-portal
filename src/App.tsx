import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useHashRouter } from './hooks/useHashRouter';
import { PublicLayout } from './layouts/PublicLayout';
import { PortalLayout } from './layouts/PortalLayout';
import { HomePage } from './pages/HomePage';
import { AdminPlaceholder } from './pages/admin/AdminPlaceholder';
import { AdminADASRecs } from './pages/admin/AdminADASRecs';
import { AdminSystemArch } from './pages/admin/AdminSystemArch';
import { AdminManageRequests } from './pages/admin/AdminManageRequests';
import { AdminWorkInProgress } from './pages/admin/AdminWorkInProgress';
import { AIChatWidget } from './components/AIChatWidget';
import { LoadingSpinner } from './components/ui';

const AppContent: React.FC = () => {
  const { hash } = useHashRouter();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const renderPage = () => {
    switch (hash) {
      case 'home':
        return <HomePage />;
      case 'admin-dashboard':
        return <AdminPlaceholder />;
      case 'admin-requests':
        return <AdminManageRequests />;
      case 'admin-recs':
        return <AdminADASRecs />;
      case 'admin-system':
        return <AdminSystemArch />;
      case 'admin-wip':
        return <AdminWorkInProgress />;
      case 'chat':
        return <AIChatWidget />;
      default:
        return <HomePage />;
    }
  };

  const layout = isAuthenticated ? PortalLayout : PublicLayout;
  const Layout = layout;

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
