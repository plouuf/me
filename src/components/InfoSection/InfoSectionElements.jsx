import styled from 'styled-components';

export const InfoContainer = styled.section`
  margin: 0rem 10rem 12rem 10rem;
  position: relative;
  /* height: auto; */
  height: calc(100vh - (8rem + 5rem));
  /* background-color: #0fb8f6; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10rem 0 10rem;

  @media screen and (max-width: 1024px) {
    margin: 0rem 2rem 8rem 2rem;
    padding: 0 2rem 0 2rem;
  }

  @media screen and (max-width: 768px) {
    margin: 0rem 1.5rem 6rem 1.5rem;
    padding: 0 1.5rem 0 1.5rem;
    height: auto;
    min-height: calc(100vh - 10rem);
  }

  @media screen and (max-width: 480px) {
    margin: 0rem 1rem 4rem 1rem;
    padding: 0 1rem 0 1rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  /* align-items: center; */
  grid-template-areas: 'col1 col2';
  width: 100%;
  opacity: 75%;
  min-height: 50%;
  /* margin-top: 2rem; */
  /* background-color: blue; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'col1'
      'col2';
    gap: 2rem;
    text-align: left;
  }
`;

export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: col2;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
`;

export const Column1 = styled.div`
  /* display: block; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  margin-bottom: 15px;
  /* margin-top: 2rem; */
  /* padding: 0 15px; */
  grid-area: col1;
  align-items: center;
  justify-content: center;
  /* background-color: purple; */
  width: 100%;
  height: 100%;
  /* opacity: 75%; */

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const InfoText = styled.p`
  font-weight: 300;
  letter-spacing: 0.8px;
  font-size: 0.94rem;
  line-height: 1.5;
  /* background-color: yellow; */
  /* color: #aaa; */
  width: 100%;

  @media screen and (max-width: 768px) {
    text-align: left;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const InfoHeader = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 1.5px;
  font-family: monospace;
  position: relative;
  width: max-content;
  /* opacity: 55%; */

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
`;

export const InfoList = styled.ul`
  /* display: flex; */
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  /* align-items: center; */
  width: 100%;
  margin: 0;
  margin-top: 20px;
  padding-left: 0.7rem;
  list-style: disc;
  /* background-color: yellow; */
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left: 1rem;
    text-align: left;
  }
`;

export const InfoListItem = styled.li`
  margin: 0 20px 0 0;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    margin: 5px 0;
    text-align: left;
  }
`;

export const InfoSectionMenuContainer = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: rgba(90, 90, 90, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: 10rem;
  gap: 8px;

  @media screen and (max-width: 1024px) {
    margin-left: 2rem;
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    background: rgba(90, 90, 90, 0.15);
    border-radius: 20px;
    padding: 20px;
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

export const InfoSectionMenuItem = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ active }) => (active ? `linear-gradient(135deg, #0fb8f6, #48c5d0)` : `rgba(255, 255, 255, 0.05)`)};
  color: ${({ active }) => (active ? `#fff` : `rgba(255, 255, 255, 0.7)`)};
  font-weight: ${({ active }) => (active ? `600` : `400`)};
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? `rgba(15, 184, 246, 0.3)` : `rgba(255, 255, 255, 0.1)`)};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(15, 184, 246, 0.2), rgba(72, 197, 208, 0.2));
    transition: left 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: ${({ active }) => (active ? `linear-gradient(135deg, #0fb8f6, #48c5d0)` : `rgba(255, 255, 255, 0.1)`)};
    color: #fff;
    border-color: rgba(15, 184, 246, 0.5);
    box-shadow: 0 8px 25px rgba(15, 184, 246, 0.15);

    &:before {
      left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    font-size: 0.85rem;
    flex: 1;
    margin: 0 5px;
    border-radius: 15px;

    &:hover {
      transform: translateY(-1px);
    }
  }

  @media screen and (max-width: 480px) {
    height: 45px;
    font-size: 0.8rem;
    margin: 0 3px;
  }
`;

export const JobHeader = ({ job, location, date }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
      }}
    >
      <div>
        {job && <span style={{ fontWeight: 600, marginRight: 5 }}>{job} @</span>}
        <span
          style={{
            fontWeight: 600,
            color: '#0fb8f6',
          }}
        >
          {location}
        </span>
      </div>
      <span style={{ opacity: '50%', fontSize: '0.8rem' }}>{date}</span>
    </div>
  );
};
