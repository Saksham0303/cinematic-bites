import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
          {/* global loading */}
          {/* global loading */}

          {/* global loading */}
          {/* global loading */}

          <Box display="flex" minHeight="100vh">
            {/* header */}
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
          {/* footer */}
        </>
    );
};

export default MainLayout;