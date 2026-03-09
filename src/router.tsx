import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const queryClient = new QueryClient();

  const router = createTanStackRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultViewTransition: false,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: (props: { error: Error }) => <div>Error: {JSON.stringify(props.error)}</div>,
    defaultNotFoundComponent: () => <div>Not Found</div>,
    Wrap: ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider defaultTheme="system">
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    ),
  });

  setupRouterSsrQueryIntegration({ router, queryClient });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
