import * as React from 'react';
import { extendTheme,
  //  styled
   }
    from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid2';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BallotIcon from '@mui/icons-material/Ballot';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PercentIcon from '@mui/icons-material/Percent';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ContentDashboard from './Views/ContentDashboard';
const NAVIGATION = [
  // USUARIO ADMIN
  // USUARIO CLIENTE 
  // USUARIO SUPERADMIN
  {
    kind: 'header',
    title: 'Super Admin Options',
  },
  {
    segment: 'dashboard',
    title: 'Funds for Strategies',
    icon: <FactCheckIcon />,
  },
  {
    segment: 'base_strategy',
    title: 'Base Strategy',
    icon: <AppRegistrationIcon />,
  },
  {
    segment: 'list_of_401K',
    title: 'List of 401K',
    icon: <ListAltIcon />,
  },
  {
    segment: 'mirror_tickers',
    title: ' Mirror Tickers',
    icon: <BallotIcon />,
  },
  {
    segment: 'clients',
    title: ' Clients',
    icon: <SupervisedUserCircleIcon />,
  },
  {
    segment: 'per_client',
    title: 'Per Client',
    icon: <PercentIcon />,
  },
  {
    segment: 'funds_missing_ticker',
    title: 'Funds Missing Ticker',
    icon: <EditCalendarIcon />,
  },
  {
    segment: 'manage_users',
    title: 'Manage Users',
    icon: <ManageAccountsIcon />,
  },

  ///////////////////////////////
  // {
  //   kind: 'divider',
  // },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  // {
  //   segment: 'reports',
  //   title: 'Reports',
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: 'sales',
  //       title: 'Sales',
  //       icon: <DescriptionIcon />,
  //     },
  //     {
  //       segment: 'traffic',
  //       title: 'Traffic',
  //       icon: <DescriptionIcon />,
  //     },
  //   ],
  // },
  // {
  //   segment: 'integrations',
  //   title: 'Integrations',
  //   icon: <LayersIcon />,
  // },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));




export default function DashboardLayoutBasic() {

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      // window={demoWindow}
      branding={{
        logo: <img src="../src/assets/logoApp.png" alt="MUI logo" />,
        title: 'Blue Grasshooper',
        homeUrl: '/dashboard',   // EN CASO DE QUE DESEE OTRA VISTA COLOCAR / SOLO O OTRA RUTA
      }}
    >
      <DashboardLayout>
        <PageContainer>
        <ContentDashboard pathname={router.pathname} />
          {/* <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid> */}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
