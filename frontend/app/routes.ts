import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  
 layout('routes/auth/auth-layout.tsx', [
  index('routes/route/home.tsx'), // Changed from 'routes/auth/home.tsx'

 route("sign-in",'routes/auth/sign-in.tsx'),
 route("forget-password",'routes/auth/forget-password.tsx'),
 route("reset-password",'routes/auth/reset-password.tsx'),
 route("sign-up",'routes/auth/sign-up.tsx'),
 route("verify-email",'routes/auth/verify-email.tsx'),
 ])


] satisfies RouteConfig;

