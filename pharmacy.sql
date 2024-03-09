-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2024 at 01:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `name1` varchar(255) NOT NULL,
  `name2` varchar(255) NOT NULL,
  `pharmacistid` int(11) NOT NULL,
  `patientid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `name1`, `name2`, `pharmacistid`, `patientid`) VALUES
(3, 'mohamed', 'radwan mohamed', 4, 1),
(4, 'ahmed', 'radwan mohamed', 7, 1),
(5, 'ahmed', 'salwa', 7, 5);

-- --------------------------------------------------------

--
-- Table structure for table `msgs`
--

CREATE TABLE `msgs` (
  `id` int(11) NOT NULL,
  `source` varchar(255) NOT NULL,
  `msg` text NOT NULL,
  `chatID` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `msgs`
--

INSERT INTO `msgs` (`id`, `source`, `msg`, `chatID`, `name`) VALUES
(1, 'patient', 'hi radwan', 0, ''),
(2, 'patient', 'hi radwan', 0, ''),
(3, 'patient', 'hi radwan', 0, ''),
(4, 'patient', 'hi radwan', 3, ''),
(5, 'patient', 'hi radwan', 3, ''),
(6, 'patient', 'hi radwan', 3, ''),
(7, 'patient', 'hi radwan', 3, ''),
(8, 'patient', 'hi radwan', 3, ''),
(9, 'patient', 'hi radwan', 3, ''),
(10, 'pharmacist', 'hi mohamed', 3, ''),
(11, 'pharmacist', 'wallpaperflare.com_wallpaper (1).jpg', 3, ''),
(12, 'patient', 'wallpaperflare.com_wallpaper (1).jpg', 3, ''),
(13, 'patient', 'wallpaperflare.com_wallpaper (1).jpg', 3, ''),
(14, 'patient', 'hi radwan', 3, ''),
(15, 'patient', 'hi nermin', 3, ''),
(16, 'patient', 'hi nermin', 4, ''),
(17, 'pharmacist', 'hi radwan', 4, ''),
(18, 'patient', 'how are you', 4, ''),
(19, 'pharmacist', 'fine thanks', 4, ''),
(20, 'patient', 'wallpaperflare.com_wallpaper (1).jpg', 3, ''),
(21, 'patient', 'wallpaperflare.com_wallpaper (1).jpg', 4, ''),
(22, 'patient', 'wallpaperflare.com_wallpaper.jpg', 4, ''),
(23, 'patient', 'wallpaperflare.com_wallpaper (1).jpg', 4, ''),
(24, 'pharmacist', 'wallpaperflare.com_wallpaper (1).jpg', 4, ''),
(25, 'radwan mohamed', 'how are you', 4, ''),
(26, 'pati0ent', 'how are you', 4, ''),
(27, 'patient', 'how are you', 4, ''),
(28, 'patient', 'how are you', 4, 'radwan mohamed'),
(29, 'patient', 'how are you', 4, 'radwan mohamed'),
(30, 'pharmacist', 'fine thanks', 4, 'ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacist`
--

CREATE TABLE `pharmacist` (
  `id` int(11) NOT NULL,
  `pharmacistID` int(11) NOT NULL,
  `pharmacyID` int(11) NOT NULL,
  `hours` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacist`
--

INSERT INTO `pharmacist` (`id`, `pharmacistID`, `pharmacyID`, `hours`) VALUES
(1, 3, 3, 3),
(8, 7, 4, 13),
(9, 5, 4, 13);

-- --------------------------------------------------------

--
-- Table structure for table `pharmacy`
--

CREATE TABLE `pharmacy` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL,
  `ownerid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pharmacy`
--

INSERT INTO `pharmacy` (`id`, `name`, `location`, `contact`, `rating`, `ownerid`) VALUES
(4, 'nermin', 'pla pla pla', '01223740125', 5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(255) NOT NULL,
  `token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `phone`, `date`, `status`, `token`) VALUES
(1, 'radwan mohamed', 'rm545@gmail.com', '$2b$10$7qb1NbdooGEa2.D3iQ7ABOK/eFhyKJsRAAw8x6m3WVHq8YO/as/7u', '3946666444', '0000-00-00', 'patient', 'a280703bf0903a2901372424b3a407f6'),
(3, 'waheed', 'n@gmail.com', '$2b$10$0hiXp3obwslBhR62bNU5DewYHhfKzO62HuYV1XPu5cwUPNenvMyh.', '3946666444', '0000-00-00', 'admin', 'e26789bd52a34020485c638b06dedbaa'),
(5, 'salwa', '', '$2b$10$CIg7CMCsJBI/xchwhTGMguHnxEt9BGj2C0uYvODMOeb6wrVIJ8ina', '', '0000-00-00', 'pharmacist', '5959666c065e029f5aa000292304a7d0'),
(7, 'ahmed', 'lffk@gmail.com', '$2b$10$HpietLapgBpOwiAqbx/Cs.iv6MOFMGdpWeujgrRwjtg8jQfIFrdX2', '3946666444', '0000-00-00', 'pharmacist', 'a416724d85654704ea4d3d1f6a3b952b');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `msgs`
--
ALTER TABLE `msgs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pharmacist`
--
ALTER TABLE `pharmacist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pharmacy`
--
ALTER TABLE `pharmacy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `msgs`
--
ALTER TABLE `msgs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `pharmacist`
--
ALTER TABLE `pharmacist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pharmacy`
--
ALTER TABLE `pharmacy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
