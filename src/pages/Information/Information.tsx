import { Grid } from '@mui/material';
import { Footer } from '../../components/Footer/Footer';
import './Information.scss';

export const Information = () => {
    return (
        <Grid item xs={12} md={5}>
            <div>
                <div className="band-side">

                <div className="band-side__header-name">
                    LADO B
                </div>
                <div className="band-side__title">
                    <div className="title">
                    Patria grande
                    </div>
                    <div className="sub-title">
                    Argentina
                    </div>
                </div>
                </div>

                <Footer></Footer>
            </div>
        
        </Grid>
    )
}
