import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";

const MainLayout = () => {
    return (
        <>
          {/* global loading */}
          <GlobalLoading />
          {/* global loading */}

          {/* global loading */}
          {/* global loading */}

          <Box display="flex" minHeight="100vh">
            {/* header */}
            <Topbar />
            {/* header */}

            {/* main */}
            <Box
                component="main"
                flexGrow={1}
                overflow="hidden"
                minHeight="100vh"
                >
                    <Outlet/>
            </Box>
            {/* main */}
          </Box>

          {/* footer */}
          <Footer />

          {/* footer */}
        </>
    );
};

export default MainLayout;