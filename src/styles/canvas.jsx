import styled from "styled-components";
import kit from "../images/kit.png";
import java from "../images/java.png";
import python from "../images/python.png";
import c from "../images/c.png";
import cxx from "../images/c++.png";
import jgu from "../images/jgu.png";

export const KITStyle = styled.text`
  color: rgb(84, 159, 138);
`;

export const KITCanvas = styled.canvas`
  top: 5px;
  width: 100px;
  height: 30px;
  background: url(${kit}) no-repeat center center;
  background-size: 90px;
  position: relative;
`;

export const JavaCanvas = styled.canvas`
  top: 7px;
  width: 110px;
  height: 35px;
  background: url(${java}) no-repeat center center;
  background-size: 100px;
  position: relative;
`;

export const PythonCanvas = styled.canvas`
  top: 5px;
  width: 130px;
  height: 40px;
  background: url(${python}) no-repeat center center;
  background-size: 140px;
  position: relative;
`;

export const CCanvas = styled.canvas`
  top: 7px;
  width: 45px;
  height: 45px;
  background: url(${c}) no-repeat center center;
  background-size: 35px;
  position: relative;
`;

export const CxxCanvas = styled.canvas`
  top: 7px;
  width: 45px;
  height: 50px;
  background: url(${cxx}) no-repeat center center;
  background-size: 40px;
  position: relative;
`;

export const JGU = styled.canvas`
  top: 12px;
  width: 45px;
  height: 50px;
  background: url(${jgu}) no-repeat center center;
  background-size: 40px;
  position: relative;
`;

export const PythonStyle = styled.text`
  color: rgb(100, 100, 100);
`;
