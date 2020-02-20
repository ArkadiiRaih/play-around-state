import styled from "@emotion/styled";

export const Main = styled.main`
  margin: 100px auto;
  padding: 20px 10px;
  border: 1px solid #ff0000;
  max-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Controls = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid #ff0000;
  padding: 5px;
  width: 100%;
`;

export const Count = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  flex: 1 0 auto;
  font-size: 80px;
  font-weight: bold;
  line-height: 100%;
`;

export const Control = styled.button`
  background: none;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ff00ff;
  min-height: 30px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: rgba(255, 0, 255, 0.2);
  }
`;
