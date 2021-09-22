import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import { setModalClose } from '../../actions';
import { projects } from '../../constants/projects';
import styles from './projectModalStyles.scss';
import Tag from './tag';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e1f4ff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#253031',
    },
  },
});

const getBulletPoints = (bullets) => {
  return (
    <ul className={styles.listSection}>
      {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
    </ul>
  );
};

const getTags = (tags, position, term) => {
  return (
    <div className={styles.tagsContainer}>
        {tags.map((tag) => <Tag key={tag + term + position} value={tag} />)}
        <div className={styles.positionContainer}>
          <i>{position}</i>
          <i>{term}</i>
        </div>
    </div>
  );
};

const ProjectModal = (props) => {
  const { open, projectIndex } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxWidth: 0.8,
    bgcolor: props.theme === 'light' ? 'primary.main' : 'secondary.main',
    boxShadow: 24,
    maxHeight: 0.85,
    overflow: 'scroll',
    p: 4,
  };

  if (projectIndex !== -1) {
    const contents = projects.english[projectIndex];
    return (
      <ThemeProvider theme={theme}>
        <Modal
          open={open}
          onClose={props.setModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h1" sx={{ fontSize: 28, fontWeight: '400', mb: 2 }}>
              {contents.title}
            </Typography>
            <img style={{ width: '20em', height: 'auto' }} src={contents.image} alt="" />
            {getTags(contents.tags, contents.position, contents.term)}
            <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 14, fontWeight: '400' }}>
              {contents.description}
            </Typography>
            {getBulletPoints(contents.bullets)}
          </Box>
        </Modal>
      </ThemeProvider>
    );
  }
  return (<div />);
};

const mapStateToProps = (state) => {
  return {
    open: state.modal.isOpen,
    projectIndex: state.modal.index,
    theme: state.theme,
  };
};

export default connect(mapStateToProps, { setModalClose })(ProjectModal);
