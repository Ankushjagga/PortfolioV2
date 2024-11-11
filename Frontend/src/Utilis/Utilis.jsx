import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
export const programmingQuotes = [
 "Why do programmers prefer dark mode? Because light attracts bugs!",
"I don't always test my code, but when I do, I do it in production.",
"Programming is 10% writing code and 90% complaining about writing code.",
"A SQL query walks into a bar, walks up to two tables, and asks, 'Can I join you?'",
"Why do Java developers wear glasses? Because they don’t see sharp.",
"My code works only if I don't look at it.",
"Debugging: Being the detective in a crime movie where you are also the murderer.",
"To understand what recursion is, you must first understand what recursion is.",
"Why do programmers hate nature? It has too many bugs.",
"If you don't like my code, you can write your own.",
"The best code is no code at all.",
"Life is too short to write bad code.",
"There's no place like 127.0.0.1.",
"If at first you don't succeed, call it version 1.0.",
"You know you're a programmer when you can spend hours solving a problem that doesn't exist.",
"It works on my machine.",
"When I wrote this code, only God and I understood what I did. Now only God knows."
]


export const languages = [
    { name: "html"  ,  icon  : <FaHtml5 className= "html"/> },
    { name: "css"  ,  icon  : <FaCss3Alt className="css" /> },
    { name: "js"  ,  icon  : <IoLogoJavascript className="js"/> },
    { name: "react"  ,  icon  : <IoLogoReact className="react" /> },
    { name: "node"  ,  icon  : <FaNodeJs  className="nodes"/> },
    { name: "express"  ,  icon  : <SiExpress className="express" /> },
    { name: "mongodb"  ,  icon  : <SiMongodb className="mongodb" /> },
    { name: "sql"  ,  icon  : <SiMysql className="sql" /> },
    { name: "sequelize"  ,  icon  : <SiSequelize  className="sequelzie"/> },
    { name: "redis"  ,  icon  : <SiRedis className="redis" /> },
    { name: "docker"  ,  icon  : <FaDocker className="docker" /> },
    { name: "native"  ,  icon  : <TbBrandReactNative className="react" /> },
    { name: "c"  ,  icon  : <i className="fa-solid fa-c"></i> },
    { name: "c++"  ,  icon  : <i className="fa-solid fa-c">++</i> },
    { name: "git"  ,  icon  : <i class="fa-brands fa-git-alt"></i> },
    
]
 

export const iconsOption = [
    {    value : "html" , label : "html"},
    {    value : "css" , label : "css"},
    {    value : "js" , label : "js"},
    {    value : "react" , label : "react"},
    {    value : "node" , label : "node"},
    {    value : "express" , label : "express"},
    {    value : "mongodb" , label : "mongodb"},
    {    value : "sql" , label : "sql"},
    {    value : "sequelize" , label : "sequelize"},
    {    value : "redis" , label : "redis"},
    {    value : "docker" , label : "docker"},
    {    value : "native" , label : "native"},
    {    value : "c" , label : "c"},
    {    value : "c++" , label : "c++"},
    {    value : "git" , label : "git"}
  
]