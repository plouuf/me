import styled from 'styled-components';

export const InfoContainer = styled.section`
  margin: 0rem 10rem 7.5rem 10rem;
  position: relative;
  /* height: auto; */
  height: calc(100vh - (8rem + 5rem));
  /* background-color: #0fb8f6; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10rem 0 10rem;
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
`;

export const InfoText = styled.p`
  font-weight: 300;
  letter-spacing: 0.8px;
  font-size: 0.94rem;
  line-height: 1.5;
  /* background-color: yellow; */
  /* color: #aaa; */
  width: 100%;
`;

export const InfoHeader = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  letter-spacing: 1.5px;
  font-family: monospace;
  position: relative;
  width: max-content;
  /* opacity: 55%; */
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
`;

export const InfoListItem = styled.li`
  margin: 0 20px 0 0;
  font-family: monospace;
  font-size: 0.85rem;
  line-height: 1.5;
`;

export const InfoSectionMenuContainer = styled.div`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  box-shadow: -25px 0px 0px -22px #5a5a5a inset;
  margin-left: 10rem;
`;

export const InfoSectionMenuItem = styled.div`
  /* background-color: grey; */
  /* margin: 20px 0 20px 0; */
  margin: 7px 0 7px 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-right: ${({ active }) =>
    active ? `3px solid #0fb8f6` : `3px solid #5a5a5a`};
  background: ${({ active }) => (active ? `#5a5a5a` : `inherit`)};

  transition: ease-in-out all;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background: #5a5a5a;
  }

  &.active {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background: #5a5a5a;
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
        {job && (
          <span style={{ fontWeight: 600 }}>{job} @</span>
        )}
        <span
          style={{
            fontWeight: 600,
            color: '#0fb8f6',
            marginLeft: 5,
          }}
        >
         {location}
        </span>
      </div>
      <span style={{ opacity: '50%', fontSize: '0.8rem' }}>{date}</span>
    </div>
  );
};
