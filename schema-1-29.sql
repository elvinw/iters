-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 29, 2016 at 06:19 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `itersdba`
--

-- --------------------------------------------------------

--
-- Table structure for table `form_element`
--

CREATE TABLE `form_element` (
  `id` int(10) NOT NULL,
  `name` varchar(255) CHARACTER SET latin1 NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 NOT NULL,
  `subject` varchar(255) CHARACTER SET latin1 NOT NULL,
  `message` varchar(255) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `form_element`
--

INSERT INTO `form_element` (`id`, `name`, `email`, `subject`, `message`) VALUES
(5, 'aaa', 'aa3@fa56.com', 'program_error', 'Hello world'),
(6, '5', 'aaa@515.net', 'other', 'ff'),
(7, 'Elvin', 'aa3@fa56.com', 'program_error', 'w6PsPx7exHD6zVTF'),
(8, 'Control', 'e@wongelv.in', 'program_error', 'hi!'),
(9, 'Elvin', 'hello@wongelv.in', 'hardware', '<script>'),
(10, 'hu', 'aa3@fa56.com', 'other', '$_POST = sanitize($_POST);'),
(11, 'hu', 'aa3@fa56.com', 'other', '$_POST = sanitize($_POST);'),
(12, '5', '3a@fasdfmn.com', 'program_error', 'qa'),
(13, '5', '3a@fasdfmn.com', 'program_error', 'qa'),
(14, 'Elvin', 'aa3@fa56.com', 'program_error', 'Hi!'),
(15, 'Elvin Wong', 'elvinw01@gmail.com', 'program_error', '<script>'),
(16, 'Sanitation ', 'test@1.com', 'other', 'this'),
(17, 'Sanitation ', 'test@1.com', 'other', '<sanitize>'),
(18, 'Elvin', 'aa3@fa56.com', 'program_error', '<script>1251513</script>'),
(19, 'Elvin', 'elvinw01@gmail.com', 'pirate', 'Stranger, how many leagues to a briny broadside hotel?'),
(20, 'Elvin', 'e@1.com', 'display', 'Stranger, how far is it to the nearest hotel?'),
(21, 'Elvin Wong', 'e@15412.com', 'pirate', 'Stranger, how many leagues to a briny broadside pub? '),
(22, 'Elvin', 'e@1.com', 'hardware', 'Stranger, how far is it to the nearest pub?'),
(23, 'Elvin', 'aa3@fa56.com', 'hardware', 'Stranger, how far is it to the closest pub?'),
(24, 'aaa', 'elvinw01@gmail.com', 'pirate', 'TY Page Test'),
(25, 'Hello', '5452@5215.com', 'hardware', 'TY Page TEst'),
(26, 'TY Test', '3a@fasdfmn.com', 'pirate', 'TY Test'),
(27, 'Final Test', 'e@wongelv.in', 'pirate', 'ahoy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form_element`
--
ALTER TABLE `form_element`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form_element`
--
ALTER TABLE `form_element`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
