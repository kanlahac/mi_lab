import { Stack, Box, Grid, Typography, alpha } from "@mui/material";
import { CustomLegendProps } from "../types";

export default function CustomLegend({ data, isNarrow, onLegendClick }: CustomLegendProps) {

    return (
        <Stack 
            gap={1} 
            direction="column" 
            justifyContent="center"
            display={"flex"}
        >
            {
                data.map((item, index) => (
                    <Grid 
                        key={index} 
                        container 
                        spacing={0} 
                        alignItems="center" 
                        justifyContent="center" 
                        onClick={() => onLegendClick(item.title)}
                        sx={{ 
                            border: '1px solid transparent',
                            cursor: 'pointer',
                            transition: 'border-color 0.3s, background-color 0.3s',
                            padding: 2,
                            '&:hover': {
                                backgroundColor: alpha(item.pallet_color, 0.05), // theme.vars.palette.chips.info.contained.backgroundHover
                                boxSizing: 'border-box',
                                borderColor: alpha(item.pallet_color, 0.2),
                                borderRadius: 2,
                            }
                        }}
                    >

                        <Grid size={{ xs: 2 }}>
                            <Box
                                sx={{
                                    width: 11,
                                    height: 11,
                                    borderRadius: '50%',
                                    backgroundColor: item.pallet_color, // theme.vars.palette.chips.info.contained.backgroundColortone
                                }}
                            />
                        </Grid>

                        <Grid size={{ xs: 10}} >
                            <Grid 
                                container 
                                spacing={0} 
                                alignItems="center" 
                                justifyContent="center"
                                sx={{ height: '100%' }}
                            >
                            
                                <Grid size={{ xs: 8 }}>
                                    <Box >
                                        {/* theme.vars.palette.text.primary */}
                                        <Typography sx={{ fontWeight: '700', fontSize: 15 }}>
                                            {item.title.split(':')[1]}
                                        </Typography>
                                    </Box>
                                </Grid>
                                    
                                <Grid size={{ xs: 4 }}>
                                    <Box sx={{ 
                                        backgroundColor: alpha(item.pallet_color, 0.12),  // theme.vars.palette.chips.info.contained.backgroundColor
                                        borderRadius: 2,
                                        padding: 0.25,
                                        color: item.pallet_color, // theme.vars.palette.chips.info.contained.color
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}>
                                        <Typography>
                                            {item.v}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    <Box>
                                        {/* theme.vars.palette.text.secondary */}
                                        <Typography sx={{ fontWeight: '500', fontSize: 11 }}> 
                                            {item.title.split(':')[0]}
                                        </Typography>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                ))
            }
        </Stack>
    );
}