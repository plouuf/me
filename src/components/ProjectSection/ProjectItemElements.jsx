import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 1000px;
  margin: 0rem auto;
`;

export const Project = styled.div`
  margin: 30px;
  margin-bottom: 10rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    margin-bottom: 5rem;
    gap: 2rem;
  }

  @media screen and (max-width: 480px) {
    margin: 15px 0;
    margin-bottom: 4rem;
  }
`;

export const ProjectContent = styled.div`
  position: relative;
  grid-column: ${({ imgStart }) => (imgStart ? `7 / -1` : `1 / 7`)};
  /* grid-column: 1 / 7; //change to 6 / -1 */
  grid-row: 1 / -1;
  z-index: 1;
  text-align: ${({ imgStart }) => (imgStart ? `right` : `left`)};

  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
    text-align: center;
    order: 2;
    width: 100%;
  }
`;

export const ProjectLabel = styled.div`
  color: #0fb8f6;
  font-family: monospace;
`;

export const ProjectTitle = styled.h4`
  font-size: 2rem;
  margin: 10px 0 30px;
  color: #eee;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 10px 0 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ProjectDetailsContainer = styled.div`
  font-size: 0.94rem;
  line-height: 1.5;
  color: #aaa;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

export const ProjectDetails = styled.p`
  background-color: #1a1a1a;
  padding: 20px 25px;
  text-align: ${({ imgStart }) => (imgStart ? `right` : `left`)};

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 15px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 15px;
    font-size: 0.85rem;
  }
`;

export const ProjectList = styled.ul`
  display: flex;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  list-style: none;
  justify-content: ${({ imgStart }) => (imgStart ? `flex-end` : `flex-start`)};

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 0;
    flex: 1;
  }
`;

export const ProjectListItem = styled.li`
  margin: ${({ imgStart }) => (imgStart ? `0 0 0 20px` : `0 20px 0 0`)};
  /* margin: 0 20px 0 0; */
  color: #fff;
  opacity: 75%;
  font-family: monospace;
  font-size: 0.85rem;

  @media screen and (max-width: 768px) {
    margin: 5px 15px 5px 0;
    font-size: 0.8rem;
  }
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  z-index: 0;
  /* background-color: #4e74a9; */
  /* background: linear-gradient(to bottom right, #0fb8f6, #48c5d0); */
  border-radius: 2px;
  grid-column: 6 / -1; //////change to 1 / 7
  grid-column: ${({ imgStart }) => (imgStart ? `1 / 8` : `6 / -1`)};

  grid-row: 1 / -1;
  width: 34rem;
  height: 22rem;

  @media screen and (max-width: 1024px) {
    width: 28rem;
    height: 18rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    height: 300px;
    order: 1;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
  }

  &:hover {
    /* filter: none; */
    /* background: none; */
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: 2px;
  position: relative;
  /* filter: grayscale(75%) contrast(1); */
  mix-blend-mode: multiply;
  transition: 0.15s ease-in;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &:hover {
    /* filter: none; */
  }
`;

export const ProjectIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ imgStart }) => (imgStart ? `flex-end` : `flex-start`)};
  gap: 1rem;
  margin-top: 1rem;
  font-size: 1.2rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

export const ProjectBottomContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
