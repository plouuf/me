import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: 0rem auto;
`;

export const Project = styled.div`
  margin: 30px;
  margin-bottom: 8rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-column: ${({ imgStart }) => (imgStart ? `7 / -1` : `1 / 7`)};
  /* grid-column: 1 / 7; //change to 6 / -1 */
  grid-row: 1 / -1;
  z-index: 1;
  text-align: ${({ imgStart }) => (imgStart ? `right` : `left`)};
`;

export const ProjectLabel = styled.div`
  color: #0fb8f6;
  font-family: monospace;
`;

export const ProjectTitle = styled.h4`
  font-size: 2rem;
  margin: 10px 0 30px;
  color: #eee;
`;

export const ProjectDetailsContainer = styled.div`
  font-size: 0.94rem;
  line-height: 1.5;
  color: #aaa;
`;

export const ProjectDetails = styled.p`
  background-color: #1a1a1a;
  padding: 20px 25px;
  text-align: ${({ imgStart }) => (imgStart ? `right` : `left`)};
`;

export const ProjectList = styled.ul`
  display: flex;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
  justify-content: ${({ imgStart }) => (imgStart ? `flex-end` : `flex-start`)};
`;

export const ProjectListItem = styled.li`
  margin: ${({ imgStart }) => (imgStart ? `0 0 0 20px` : `0 20px 0 0`)};
  /* margin: 0 20px 0 0; */
  color: #fff;
  opacity: 75%;
  font-family: monospace;
  font-size: 0.85rem;
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  z-index: 0;
  /* background-color: #4e74a9; */
  /* background: linear-gradient(0.4turn, #8fbdfd, #4e74a9); */
  border-radius: 2px;
  grid-column: 6 / -1; //////change to 1 / 7
  grid-column: ${({ imgStart }) => (imgStart ? `1 / 8` : `6 / -1`)};

  grid-row: 1 / -1;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: 2px;
  position: relative;
  /* filter: grayscale(50%) contrast(1); */
  transition: 0.15s ease-in;

  @media screen and (max-width: 768px) {
    object-fit: cover;
    width: auto;
    height: 100%;
  }

  &:hover {
    /* filter: none; */
  }
`;
