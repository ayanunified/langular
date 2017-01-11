-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 11, 2017 at 04:15 PM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 7.0.14-2+deb.sury.org~trusty+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `makingadminpanel`
--

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE IF NOT EXISTS `devices` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token_creation_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=217 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `uid`, `token`, `token_creation_time`) VALUES
(1, 9, '96731482149781', '2016-12-19 12:16:21'),
(2, 13, '47341482150997', '2016-12-19 12:36:37'),
(3, 9, '73851482152427', '2016-12-19 13:00:27'),
(4, 16, '42511482154744', '2016-12-19 13:39:04'),
(5, 9, '91441482155672', '2016-12-19 13:54:32'),
(6, 17, '88641482156934', '2016-12-19 14:15:34'),
(7, 9, '46291482210747', '2016-12-20 05:12:27'),
(8, 18, '48941482215763', '2016-12-20 06:36:03'),
(9, 18, '40951482218345', '2016-12-20 07:19:05'),
(10, 18, '23691482218593', '2016-12-20 07:23:13'),
(11, 18, '99971482218651', '2016-12-20 07:24:11'),
(12, 18, '59761482218854', '2016-12-20 07:27:34'),
(13, 18, '62851482219644', '2016-12-20 07:40:44'),
(14, 18, '72691482219784', '2016-12-20 07:43:04'),
(15, 18, '30841482220843', '2016-12-20 08:00:43'),
(16, 9, '82101482227822', '2016-12-20 09:57:02'),
(17, 9, '95341482229661', '2016-12-20 10:27:41'),
(18, 18, '13301482229884', '2016-12-20 10:31:24'),
(19, 18, '33641482229940', '2016-12-20 10:32:20'),
(20, 9, '43291482232389', '2016-12-20 11:13:09'),
(21, 9, '19531482232405', '2016-12-20 11:13:25'),
(22, 9, '17171482232419', '2016-12-20 11:13:39'),
(23, 9, '84711482232513', '2016-12-20 11:15:13'),
(24, 9, '50271482232520', '2016-12-20 11:15:20'),
(25, 9, '10971482232598', '2016-12-20 11:16:38'),
(26, 9, '10921482232871', '2016-12-20 11:21:11'),
(27, 18, '28771482239741', '2016-12-20 13:15:41'),
(28, 18, '59651482239795', '2016-12-20 13:16:35'),
(29, 18, '78221482239869', '2016-12-20 13:17:49'),
(30, 18, '94241482240077', '2016-12-20 13:21:17'),
(31, 18, '16971482240161', '2016-12-20 13:22:41'),
(32, 18, '32991482240382', '2016-12-20 13:26:22'),
(33, 18, '88541482240546', '2016-12-20 13:29:06'),
(34, 2, '34721482240663', '2016-12-20 13:31:03'),
(35, 2, '34791482240675', '2016-12-20 13:31:15'),
(36, 2, '16911482240685', '2016-12-20 13:31:25'),
(37, 18, '37441482241040', '2016-12-20 13:37:20'),
(38, 18, '''91571482241140''', '2016-12-20 13:39:00'),
(39, 18, '16011482241497', '2016-12-20 13:44:57'),
(40, 18, '21071482241677', '2016-12-20 13:47:57'),
(41, 18, '60611482242231', '2016-12-20 13:57:11'),
(42, 18, '82441482243225', '2016-12-20 14:13:45'),
(43, 18, '41101482243538', '2016-12-20 14:18:58'),
(44, 18, '37201482243560', '2016-12-20 14:19:20'),
(45, 9, '37821482243576', '2016-12-20 14:19:36'),
(46, 9, '44191482243656', '2016-12-20 14:20:56'),
(47, 18, '56311482243674', '2016-12-20 14:21:14'),
(48, 18, '48491482243747', '2016-12-20 14:22:27'),
(49, 18, '20321482243780', '2016-12-20 14:23:00'),
(50, 18, '29311482243827', '2016-12-20 14:23:47'),
(51, 9, '44591482247649', '2016-12-20 15:27:29'),
(52, 9, '34911482247746', '2016-12-20 15:29:06'),
(53, 9, '84261482248324', '2016-12-20 15:38:44'),
(54, 9, '23681482248411', '2016-12-20 15:40:11'),
(59, 23, '25001482307632', '2016-12-21 08:07:12'),
(60, 9, '44161482330349', '2016-12-21 14:25:49'),
(61, 24, '51521482330536', '2016-12-21 14:28:56'),
(62, 9, '75091482330547', '2016-12-21 14:29:07'),
(63, 25, '89031482330661', '2016-12-21 14:31:01'),
(64, 26, '33931482330686', '2016-12-21 14:31:26'),
(65, 27, '74271482330717', '2016-12-21 14:31:57'),
(66, 28, '44441482330784', '2016-12-21 14:33:04'),
(67, 24, '61631482330870', '2016-12-21 14:34:30'),
(68, 24, '45341482331051', '2016-12-21 14:37:31'),
(69, 24, '17771482331187', '2016-12-21 14:39:47'),
(70, 24, '69241482331215', '2016-12-21 14:40:15'),
(71, 24, '50311482331237', '2016-12-21 14:40:37'),
(72, 24, '15511482331445', '2016-12-21 14:44:05'),
(73, 23, '43301482337380', '2016-12-21 16:23:00'),
(74, 24, '34031482337411', '2016-12-21 16:23:31'),
(75, 23, '10131482339625', '2016-12-21 17:00:25'),
(76, 9, '97781482340990', '2016-12-21 17:23:10'),
(77, 9, '73041482340992', '2016-12-21 17:23:12'),
(78, 9, '76711482341056', '2016-12-21 17:24:16'),
(79, 9, '54891482341072', '2016-12-21 17:24:32'),
(80, 9, '58391482341090', '2016-12-21 17:24:50'),
(81, 9, '12791482341099', '2016-12-21 17:24:59'),
(82, 9, '52661482333994', '2016-12-21 15:26:34'),
(83, 9, '33461482333995', '2016-12-21 15:26:35'),
(84, 9, '52531482382070', '2016-12-22 04:47:50'),
(85, 24, '34081482384430', '2016-12-22 05:27:10'),
(86, 24, '72971482384441', '2016-12-22 05:27:21'),
(87, 31, '20481482387385', '2016-12-22 06:16:25'),
(88, 23, '62871482394139', '2016-12-22 08:08:59'),
(89, 23, '19701482396947', '2016-12-22 08:55:47'),
(90, 23, '40701482397682', '2016-12-22 09:08:02'),
(91, 23, '15521482398412', '2016-12-22 09:20:12'),
(92, 23, '58891482398487', '2016-12-22 09:21:27'),
(93, 23, '72231482399521', '2016-12-22 09:38:41'),
(94, 23, '54061482399806', '2016-12-22 09:43:26'),
(95, 23, '45521482410332', '2016-12-22 12:38:52'),
(96, 23, '61791482410426', '2016-12-22 12:40:26'),
(97, 23, '16911482411031', '2016-12-22 12:50:31'),
(98, 23, '78571482411831', '2016-12-22 13:03:51'),
(99, 23, '18831482412917', '2016-12-22 13:21:57'),
(100, 23, '90691482413295', '2016-12-22 13:28:15'),
(101, 23, '51781482413701', '2016-12-22 13:35:01'),
(102, 23, '35511482414061', '2016-12-22 13:41:01'),
(103, 23, '64991482414600', '2016-12-22 13:50:00'),
(104, 23, '20461482414740', '2016-12-22 13:52:20'),
(105, 23, '84061482415054', '2016-12-22 13:57:34'),
(106, 23, '21761482415289', '2016-12-22 14:01:29'),
(107, 23, '16081482415400', '2016-12-22 14:03:20'),
(108, 23, '71991482415569', '2016-12-22 14:06:09'),
(109, 9, '56271482416079', '2016-12-22 14:14:39'),
(110, 23, '18671482471333', '2016-12-23 05:35:33'),
(111, 23, '18931482473784', '2016-12-23 06:16:24'),
(112, 24, '42351482474016', '2016-12-23 06:20:16'),
(113, 23, '52711482474163', '2016-12-23 06:22:43'),
(114, 23, '26601482475405', '2016-12-23 06:43:25'),
(115, 23, '60511482477247', '2016-12-23 07:14:07'),
(116, 23, '49011482477380', '2016-12-23 07:16:20'),
(117, 23, '35141482477999', '2016-12-23 07:26:39'),
(118, 23, '91941482478916', '2016-12-23 07:41:56'),
(119, 23, '67851482479008', '2016-12-23 07:43:28'),
(120, 23, '41441482479144', '2016-12-23 07:45:44'),
(121, 23, '89961482479558', '2016-12-23 07:52:38'),
(122, 23, '30091482479614', '2016-12-23 07:53:34'),
(123, 9, '37461482486991', '2016-12-23 09:56:31'),
(124, 24, '61421482490550', '2016-12-23 10:55:50'),
(125, 24, '31051482490784', '2016-12-23 10:59:44'),
(126, 24, '67291482490847', '2016-12-23 11:00:47'),
(127, 24, '65551482490879', '2016-12-23 11:01:19'),
(128, 24, '32111482491607', '2016-12-23 11:13:27'),
(129, 2, '24461482491723', '2016-12-23 11:15:23'),
(130, 2, '12381482491734', '2016-12-23 11:15:34'),
(131, 2, '55811482491742', '2016-12-23 11:15:42'),
(132, 2, '79541482491818', '2016-12-23 11:16:58'),
(133, 23, '98021482501295', '2016-12-23 13:54:55'),
(134, 23, '26931482733972', '2016-12-26 06:32:52'),
(135, 23, '96181482734375', '2016-12-26 06:39:35'),
(136, 23, '97921482736077', '2016-12-26 07:07:57'),
(137, 23, '12851482736162', '2016-12-26 07:09:22'),
(138, 23, '62311482736445', '2016-12-26 07:14:05'),
(139, 23, '86071482737014', '2016-12-26 07:23:34'),
(140, 23, '78821482737130', '2016-12-26 07:25:30'),
(141, 23, '29481482737404', '2016-12-26 07:30:04'),
(142, 23, '20571482737824', '2016-12-26 07:37:04'),
(143, 23, '21301482737938', '2016-12-26 07:38:58'),
(144, 23, '15871482738042', '2016-12-26 07:40:42'),
(145, 23, '43211482738313', '2016-12-26 07:45:13'),
(146, 23, '18701482738619', '2016-12-26 07:50:19'),
(147, 23, '19361482738780', '2016-12-26 07:53:00'),
(148, 23, '63481482739355', '2016-12-26 08:02:35'),
(149, 23, '29521482739649', '2016-12-26 08:07:29'),
(150, 24, '15981482744057', '2016-12-26 09:20:57'),
(151, 24, '86351482747220', '2016-12-26 10:13:40'),
(152, 23, '40131482748064', '2016-12-26 10:27:44'),
(153, 23, '52441482754472', '2016-12-26 12:14:32'),
(154, 24, '99761482754514', '2016-12-26 12:15:14'),
(155, 32, '23891482755377', '2016-12-26 12:29:37'),
(156, 24, '21641482756655', '2016-12-26 12:50:55'),
(157, 33, '68981482757108', '2016-12-26 12:58:28'),
(158, 24, '91771482757635', '2016-12-26 13:07:15'),
(159, 33, '80641482757746', '2016-12-26 13:09:06'),
(160, 33, '68201482758000', '2016-12-26 13:13:20'),
(161, 33, '99041482758571', '2016-12-26 13:22:51'),
(162, 24, '65871482759674', '2016-12-26 13:41:14'),
(163, 34, '25071482822650', '2016-12-27 07:10:50'),
(164, 24, '26771482833100', '2016-12-27 10:05:00'),
(165, 24, '30471482835218', '2016-12-27 10:40:18'),
(166, 24, '97371482836307', '2016-12-27 10:58:27'),
(167, 24, '94791482837685', '2016-12-27 11:21:25'),
(168, 33, '88001482837973', '2016-12-27 11:26:13'),
(169, 24, '99401482838071', '2016-12-27 11:27:51'),
(170, 24, '15551482838124', '2016-12-27 11:28:44'),
(171, 23, '57071482838912', '2016-12-27 11:41:52'),
(172, 2, '98541482929507', '2016-12-28 12:51:47'),
(173, 2, '85651482929639', '2016-12-28 12:53:59'),
(174, 2, '56611482929668', '2016-12-28 12:54:28'),
(175, 2, '29641482930163', '2016-12-28 13:02:43'),
(176, 2, '42661482930227', '2016-12-28 13:03:47'),
(177, 2, '86941482930229', '2016-12-28 13:03:49'),
(178, 2, '80501482930243', '2016-12-28 13:04:03'),
(179, 2, '47441482930294', '2016-12-28 13:04:54'),
(180, 2, '11471482930440', '2016-12-28 13:07:20'),
(181, 1, '32001482930453', '2016-12-28 13:07:33'),
(182, 1, '35711482930592', '2016-12-28 13:09:52'),
(183, 1, '75621482931020', '2016-12-28 13:17:00'),
(184, 1, '67201482931023', '2016-12-28 13:17:03'),
(185, 1, '48571482931221', '2016-12-28 13:20:21'),
(186, 1, '46211482931661', '2016-12-28 13:27:41'),
(187, 1, '42381482931680', '2016-12-28 13:28:00'),
(188, 1, '23491482931696', '2016-12-28 13:28:16'),
(189, 1, '57121482931737', '2016-12-28 13:28:57'),
(190, 1, '92681482933065', '2016-12-28 13:51:05'),
(191, 1, '14731482933085', '2016-12-28 13:51:25'),
(192, 1, '47321482933507', '2016-12-28 13:58:27'),
(193, 1, '63481482933782', '2016-12-28 14:03:02'),
(194, 1, '63941482933852', '2016-12-28 14:04:12'),
(195, 1, '32411482933855', '2016-12-28 14:04:15'),
(196, 1, '17131482933858', '2016-12-28 14:04:18'),
(197, 1, '11401482933859', '2016-12-28 14:04:19'),
(198, 1, '19881482933878', '2016-12-28 14:04:38'),
(199, 1, '40131482933879', '2016-12-28 14:04:39'),
(200, 1, '16281482933881', '2016-12-28 14:04:41'),
(201, 1, '72391482933881', '2016-12-28 14:04:41'),
(202, 1, '28121482933925', '2016-12-28 14:05:25'),
(203, 1, '31451482933961', '2016-12-28 14:06:01'),
(204, 1, '90041482933984', '2016-12-28 14:06:24'),
(205, 1, '60401482934045', '2016-12-28 14:07:25'),
(206, 1, '21021482934186', '2016-12-28 14:09:46'),
(207, 1, '86601482934268', '2016-12-28 14:11:08'),
(208, 1, '30051482934318', '2016-12-28 14:11:58'),
(209, 1, '23561482934320', '2016-12-28 14:12:00'),
(210, 1, '13621482934416', '2016-12-28 14:13:36'),
(211, 1, '63841482934480', '2016-12-28 14:14:40'),
(212, 1, '65821482934562', '2016-12-28 14:16:02'),
(213, 1, '53381482934592', '2016-12-28 14:16:32'),
(214, 1, '63021482935743', '2016-12-28 14:35:43'),
(215, 1, '75361482989219', '2016-12-29 05:26:59'),
(216, 1, '94811484048992', '2017-01-10 11:49:52');

-- --------------------------------------------------------

--
-- Table structure for table `emails_templates`
--

CREATE TABLE IF NOT EXISTS `emails_templates` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `content` longtext COLLATE utf8_unicode_ci NOT NULL,
  `subject` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `emails_templates`
--

INSERT INTO `emails_templates` (`id`, `name`, `content`, `subject`) VALUES
(2, 'Forgot Password Step 1 ', '<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td><!-- HIDDEN PREHEADER TEXT -->\r\n			<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">Entice the open with some amazing preheader text. Use a little mystery and get those subscribers to read through...</div>\r\n\r\n			<table align="center" border="0" cellpadding="0" cellspacing="0" class="wrapper" style="width:500px"><!-- LOGO/PREHEADER TEXT -->\r\n				<tbody>\r\n					<tr>\r\n						<td>\r\n						<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n							<tbody>\r\n								<tr>\r\n									<td>&nbsp;</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table border="0" cellpadding="0" cellspacing="0" class="responsive-table" style="width:500px">\r\n				<tbody>\r\n					<tr>\r\n						<td>\r\n						<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n							<tbody>\r\n								<tr>\r\n									<td>&nbsp;</td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n									<table border="0" cellpadding="0" cellspacing="0" class="mobile-button-container" style="width:100%">\r\n										<tbody>\r\n											<tr>\r\n												<td>\r\n												<p>&nbsp;</p>\r\n\r\n												<p>&nbsp;</p>\r\n\r\n												<p><a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME]&nbsp;</a></p>\r\n												</td>\r\n											</tr>\r\n										</tbody>\r\n									</table>\r\n									</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n				<tbody>\r\n					<tr>\r\n						<td><!-- UNSUBSCRIBE COPY -->\r\n						<table align="center" border="0" cellpadding="0" cellspacing="0" class="responsive-table" style="width:500px">\r\n							<tbody>\r\n								<tr>\r\n									<td><span style="color:#666666">Copyright &copy; 2015 sleeplocker.com. All rights reserved.</span><br />\r\n									Terms of Service<span style="color:#444444; font-family:arial,sans-serif; font-size:12px">&nbsp;|&nbsp;</span>Privacy Policy</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 'Jobando:: Password Reset Request'),
(3, 'Forgot Password Step 2', '<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n				<tbody>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 'Jobando :: New Password'),
(4, 'Expiring Subscription 1', '<h3>Hi [NAME],</h3>\r\n\r\n<p>Your [SITE_NAME] subscription is going to expire on [DATE]. To extend your subscription please follow this link&nbsp;<a href=''[RESUBSCRIPTION_LINK]''>Please Click Here To Resubscribe</a>.</p>\r\n\r\n<p>Regards,<br />\r\n<a href=''[SITE_NAME_TEAM_LINK]''>[SITE_NAME] Team</a></p>', 'Jobando :: expiring subscription notification'),
(5, 'Subscription Extension Completed', '<h3>Hi [NAME],</h3>\r\n\r\n<h3>Your subscription extension process is successfully completed. You can now continue using [SITE_NAME]&nbsp;till [DATE].</h3>\r\n\r\n<h3>Regards,<br />\r\n<a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME] Team</a></h3>\r\n', 'Jobando :: subscription extension'),
(6, 'Account Activation', '<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td><!-- HIDDEN PREHEADER TEXT -->\r\n			<div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">Entice the open with some amazing preheader text. Use a little mystery and get those subscribers to read through...</div>\r\n\r\n			<table align="center" border="0" cellpadding="0" cellspacing="0" class="wrapper" style="width:500px"><!-- LOGO/PREHEADER TEXT -->\r\n				<tbody>\r\n					<tr>\r\n						<td>&nbsp;</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table border="0" cellpadding="0" cellspacing="0" class="responsive-table" style="width:500px">\r\n				<tbody>\r\n					<tr>\r\n						<td>\r\n						<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n							<tbody>\r\n								<tr><!-- HERO IMAGE -->\r\n									<td>&nbsp;</td>\r\n								</tr>\r\n								<tr>\r\n									<td><!-- COPY -->\r\n									<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n										<tbody>\r\n											<tr>\r\n												<td>Welcome [NAME],</td>\r\n											</tr>\r\n											<tr>\r\n												<td>\r\n												<p>We&#39;re pleased to welcome you to [SITE_NAME], your personal sleep improvement assistant. You&#39;re right at the start of your sleep recovery journey and we are very excited about that.</p>\r\n\r\n												<p><strong>What&#39;s Next?</strong></p>\r\n\r\n												<p>If you have missed our getting started video, please click on the link below.</p>\r\n												</td>\r\n											</tr>\r\n										</tbody>\r\n									</table>\r\n									</td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n									<table border="0" cellpadding="0" cellspacing="0" class="mobile-button-container" style="width:100%">\r\n										<tbody>\r\n											<tr>\r\n												<td>\r\n												<table border="0" cellpadding="0" cellspacing="0" class="responsive-table">\r\n													<tbody>\r\n														<tr>\r\n															<td><a class="mobile-button" href="https://www.youtube.com/embed/phagjyxWvSQ" style="font-size: 16px; font-family: Helvetica, Arial, sans-serif; font-weight: normal; color: #ffffff; text-decoration: none; background-color: #E56213; border-top: 15px solid #E56213; border-bottom: 15px solid #E56213; border-left: 25px solid #E56213; border-right: 25px solid #E56213; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; display: inline-block;" target="_blank">Watch Now &rarr;</a></td>\r\n														</tr>\r\n													</tbody>\r\n												</table>\r\n\r\n												<p>&nbsp;</p>\r\n												</td>\r\n											</tr>\r\n										</tbody>\r\n									</table>\r\n\r\n									<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n										<tbody>\r\n											<tr>\r\n												<td><a href="#" target="_blank"><img alt="Insert alt text here" class="img-max" src="http://www.unifiedinfotech.co.in/webroot/team1/sleep_beta/backend/uploads/editor/1451829775_editor_file" style="border-style:solid; border-width:0px; color:rgb(102, 102, 102); display:block; font-family:helvetica,arial,sans-serif; font-size:16px; height:360px; padding:0px; text-decoration:none; width:480px" /></a></td>\r\n											</tr>\r\n										</tbody>\r\n									</table>\r\n\r\n									<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n										<tbody>\r\n											<tr>\r\n												<td>Our Greatest Feature Ever</td>\r\n											</tr>\r\n											<tr>\r\n												<td>\r\n												<p><strong>Have a Question?</strong></p>\r\n\r\n												<p>Feel free to contact us at <a href="mailto:support@sleeplocker.com">support@sleeplocker.com</a></p>\r\n\r\n												<p>Your subscription is active till end of [DATE].</p>\r\n\r\n												<p>Enjoy your days and nights!</p>\r\n\r\n												<p><a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME]</a></p>\r\n												</td>\r\n											</tr>\r\n										</tbody>\r\n									</table>\r\n									</td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<table border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">\r\n				<tbody>\r\n					<tr>\r\n						<td><!-- UNSUBSCRIBE COPY -->\r\n						<table align="center" border="0" cellpadding="0" cellspacing="0" class="responsive-table" style="width:500px">\r\n							<tbody>\r\n								<tr>\r\n									<td><span style="color:rgb(102, 102, 102); font-family:helvetica,arial,sans-serif; font-size:12px">Copyright &copy; 2015 sleeplocker.com. All rights reserved.</span><br />\r\n									Terms of Service<span style="color:rgb(68, 68, 68); font-family:arial,sans-serif; font-size:12px">&nbsp;|&nbsp;</span><span style="color:rgb(102, 102, 102); font-family:helvetica,arial,sans-serif; font-size:12px">Privacy Policy</span></td>\r\n								</tr>\r\n							</tbody>\r\n						</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n', 'Jobando :: Welcome'),
(7, 'Resubscription link', '<h3>Hi [NAME],</h3>\r\n\r\n<p>To extend your [SITE_NAME] subscription please follow this link&nbsp;<a href="[RESUBSCRIPTION_LINK]">Click Here To Resubscribe</a>.</p>\r\n\r\n<p>Regards,<br />\r\n<a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME] Team</a></p>\r\n', 'Jobando :: Resubscription Link'),
(8, 'Expiring Subscription 7', '<h3>Hi [NAME],</h3>\r\n\r\n<p>Your [SITE_NAME] subscription is going to expire on [DATE]. To extend your subscription please follow this link&nbsp;<a href="[RESUBSCRIPTION_LINK]">Click Here To Resubscribe</a>.</p>\r\n\r\n<p>Regards,<br />\r\n<a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME] Team</a></p>\r\n', 'Jobando :: expiring subscription notification'),
(9, 'Expiring Subscription 3', '<h3>Hi [NAME],</h3>\r\n\r\n<p>Your [SITE_NAME] subscription is going to expire on [DATE]. To extend your subscription please follow this link&nbsp;<a href="[RESUBSCRIPTION_LINK]">Click Here To Resubscribe</a>.</p>\r\n\r\n<p>Regards,<br />\r\n<a href="[SITE_NAME_TEAM_LINK]">[SITE_NAME] Team</a></p>\r\n', 'jobando :: expiring subscription notification');

-- --------------------------------------------------------

--
-- Table structure for table `forgot_password_requests`
--

CREATE TABLE IF NOT EXISTS `forgot_password_requests` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `reference_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `forgot_password_requests`
--

INSERT INTO `forgot_password_requests` (`id`, `uid`, `reference_id`) VALUES
(18, 23, '891482490035'),
(26, 9, '831482760515');

-- --------------------------------------------------------

--
-- Table structure for table `sitesettings`
--

CREATE TABLE IF NOT EXISTS `sitesettings` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `validation_rules` text COLLATE utf8_unicode_ci NOT NULL,
  `validation_regex_php` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sitesettings`
--

INSERT INTO `sitesettings` (`id`, `name`, `display_name`, `type`, `value`, `validation_rules`, `validation_regex_php`) VALUES
(1, 'email', 'From which email do you want to send your appication emails?', 'text', 'no-reply@jobando.com', 'validate[required,custom[email]]', '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
(2, 'image-icon', 'Please upload your site logo below', 'file', '41046.jpg', 'validate[custom[image]]', ''),
(3, 'address', 'Please fill site address', 'text-area', '   1404 Sofia, Bulgaria,Kolkata', 'validate[required]', ''),
(4, 'contact', 'Please fill contact-number', 'text', '+359 888 500 888', 'validate[required,custom[phone]]', ''),
(5, 'facebook', 'Facebook link', 'text', 'https://www.facebook.com/', 'validate[required,custom[url]]', ''),
(6, 'linkedin', 'Linked In link', 'text', 'https://linkedin.com/', 'validate[required,custom[url]]', ''),
(7, 'Twitter', 'Twitter link', 'text', 'https://twitter.com/', 'validate[required,custom[url]]', ''),
(8, 'flatrate', 'Please enter pricing flat rate', 'text', '8', 'validate[required,custom[number]]', ''),
(9, 'contact_email', 'To which email do you want the contact us requests to be sent?', 'text', 'support@jobando.com', 'validate[required,custom[email]]', '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `middle_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `role` int(11) NOT NULL COMMENT '1 ==> superadmin, 2 ==> employee, 3 ==> employer',
  `created_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `is_deleted` int(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `remember_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `device_type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '1=>android,2=>ios',
  `device_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `login_type` int(11) DEFAULT '0' COMMENT '0=>normal,1=>google,2=>facebook'
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `middle_name`, `last_name`, `email`, `password`, `role`, `created_at`, `updated_at`, `is_deleted`, `status`, `remember_token`, `device_type`, `device_id`, `login_type`) VALUES
(1, 'Jobando', NULL, '', 'runa.unified@gmail.com', '$2y$10$vAoaoTk4RXJE.hKz0/Neku0g4jiax1AJudMhaiPiZK1xB.0FMhLiW', 1, '0000-00-00 00:00:00', '2016-12-23 15:18:53', 0, 1, 'TPKpTCvU7U0y4ZB93oNxCBLZSQlnZCjKwC7ebf05oh3MOYQQ58tas4GaeyUt', NULL, NULL, 0),
(2, 'Runa', NULL, 'Patra', 'runa.unified1@gmail.com', '$2y$10$V5NaRRbIbY/uUKgF087HNu7RFxqPF98jVVChboKCv7C2vlUj7mKie', 2, '2016-12-14 06:38:21', '2016-12-28 12:51:47', 0, 1, '8YQfzVWfeStsXQk0IbmAJ76Hmrxi1Kxhy4IYnIDjiQDJlx8qdilahBqCuiq5', 'android', '1', 0),
(3, 'Runa', NULL, 'Patra', 'test@gmail.com', '$2y$10$lAKaRspXSNZQJVFDyinfS.FhdJovYNj99Xd5/wBdiJ.Ib5ESTPy7e', 3, '2016-12-14 07:37:18', '2016-12-14 10:26:11', 0, 1, NULL, 'android', NULL, 0),
(4, 'Runa', NULL, 'rr', 'testt@gmail.com', '$2y$10$b7zqCb367TlrNjfTrH2s3.qlEPBXXHdLSefFSBql0ObtoPDjAY5.i', 3, '2016-12-14 09:00:16', '2016-12-19 14:35:28', 0, 1, NULL, 'android', NULL, 0),
(5, 'Runa', NULL, 'rr', 'testbbt@gmail.com', '$2y$10$KD8XmlQxmqY6lwjbr2oGw..Mkw7HxfUvvJu6NZ6BdidUUzA7I5XG6', 3, '2016-12-14 09:24:03', '2016-12-22 07:18:38', 1, 1, NULL, 'android', NULL, 0),
(6, 'Runa', NULL, 'rr', 'testbbfft@gmail.com', NULL, 3, '2016-12-14 09:26:04', '2016-12-19 13:13:03', 1, 1, NULL, 'android', NULL, 1),
(7, 'Runa', NULL, 'rr', 'test.test@gmail.com', '$2y$10$V.kTaLiN8huxeTN/Gix7peSZB/Y98A1lOMGWtX2jX4u8M5YknGVom', 2, '2016-12-14 13:01:00', '2016-12-19 12:15:58', 1, 1, NULL, 'android', NULL, 0),
(8, 'Runa', NULL, 'rr', 'test.test1@gmail.com', '$2y$10$CuZnRxWE2mU5v2XbGJcJq.OQUWIqzmkE2fc3feC/76vggkLr10aNa', 2, '2016-12-14 13:01:48', '2016-12-19 12:14:38', 0, 1, NULL, 'android', NULL, 0),
(9, 'Jit', NULL, 'Dhar', 'jit.unified@gmail.com', '$2y$10$AiuDim4snIQCwkpXZHlEFOQqcrN38PHFPYn3QJX6pgzD3cydC.qA2', 2, '2016-12-19 09:26:08', '2016-12-22 14:15:22', 0, 1, NULL, 'IOS', 'ewr', 0),
(10, 'Runa', NULL, 'patra', 'runa@unifiedinfotech.net', '$2y$10$xmNX6.QxHf7IlVCS4BWDI.z7lFH9/Q4Lcc0xV/z/owBgEKWs0QsXK', 2, '2016-12-19 10:43:29', '2016-12-19 12:09:01', 0, 1, NULL, NULL, NULL, 1),
(11, 'Jit', NULL, 'Dhar', 'jit.unified1@gmail.com', '$2y$10$IcoI92ODEPDJIyVhm7AhNuoT7nnpdgsprPf7MY7DS0pe5BDjPXQQC', 3, '2016-12-19 11:21:14', '2016-12-19 14:43:04', 0, 1, NULL, NULL, NULL, 0),
(13, 'Jit', NULL, 'Dhar', 'jit.unified12@gmail.com', '$2y$10$PW1/gUXjOUrYRmJfA8X2R..Fx0DTUbGmqeEyeLcyVwHTe31a2sCaC', 3, '2016-12-19 12:36:36', '2016-12-19 12:36:36', 0, 1, NULL, NULL, NULL, 0),
(14, 'Shilpa', NULL, 'Roy', 'shilpa.unified@gmail.com', '$2y$10$JQtHSq5gZIe0Dk5JsaOiEes0ch7Udt1HUE0j9Q/lO34TEqPPRdYP6', 2, '2016-12-19 13:10:17', '2016-12-19 13:10:17', 0, 1, NULL, NULL, NULL, 0),
(15, 'Shilpa', NULL, 'Roy', 'shilpa.unified1@gmail.com', '$2y$10$xD.KkNJuRYbx80QnSW.pFuE/BkQYshgtMFbaY4LzT8XnWYUYkKMJ.', 3, '2016-12-19 13:11:14', '2016-12-20 08:06:53', 0, 1, NULL, NULL, NULL, 0),
(16, 'Jit', NULL, 'Dhar', 'jit.unified123@gmail.com', '$2y$10$qkj8jTnRs1x9EXhx6/S/Ae3WTo/uSx9kRhD7UDiunOqmNMmseW.pe', 3, '2016-12-19 13:39:04', '2016-12-20 08:07:02', 0, 1, NULL, NULL, NULL, 0),
(17, 'qweqweq', NULL, 'weqeq', 'weqwe@sdsf.cc', '$2y$10$keuuTiDdyOtQi4LqeCTj4.1xO8nEYYczruz7BSlRr01iF2PB1/MFK', 0, '2016-12-19 14:15:34', '2016-12-19 14:15:34', 0, 1, NULL, 'Android', NULL, 0),
(18, 'Debarghya', NULL, 'Das', 'debarghya.unified@gmail.com', '$2y$10$PM5o8vPtxxTzZxlCO7J28ORZvEH.EJtQo9v./MktrYLpZmr8M7Gfe', 2, '2016-12-20 06:36:03', '2016-12-20 14:23:00', 0, 1, NULL, 'Android', '0000', 0),
(23, 'Debarghya', NULL, 'Das', 'gr8deba@gmail.com', NULL, 2, '2016-12-21 08:07:10', '2016-12-22 09:39:12', 0, 1, NULL, 'Android', '0000', 1),
(24, 'D', NULL, 'DD', 'd@d.d', '$2y$10$iVfx1VVbOmX39BDUE/UEM.BXjotekMTtUjqn9OWB9tcLxlW765t26', 2, '2016-12-21 14:28:56', '2016-12-26 12:09:11', 0, 1, NULL, 'Android', '0000', 0),
(25, 'Jit', NULL, 'Dhar', 'jit.unified12453@gmail.com', '$2y$10$I2n3n7pO1o5pHWtYKAXvweU5t5dnbtPk8.3Qk8pVmHRdsKcEpEX4e', 3, '2016-12-21 14:31:01', '2016-12-21 14:31:01', 0, 1, NULL, NULL, NULL, 0),
(26, 'Jit', NULL, 'Dhar', 'jit.unified12gbdfgfdg453@gmail.com', '$2y$10$NSkpkxBfOj270CkoXLH0..iTAKLEo.fQbTz7llNlLCU4z2DJ9125O', 3, '2016-12-21 14:31:26', '2016-12-22 06:11:08', 0, 1, NULL, 'Ios', 'gfsgsg', 0),
(27, 'D', NULL, 'DD', 'd@d.drf', '$2y$10$Jt89LVQVDt25RqsEGfGV6u38UaJHRnjAfm3k6yaymGGUiaEZJdF.G', 2, '2016-12-21 14:31:57', '2016-12-22 06:09:23', 0, 1, NULL, 'Android', '0000', 0),
(28, 'rtyryrty', NULL, 'rtyrtyr', 'tyry@drfegr.CCC', '$2y$10$Trs2J7ni9Ug0OvG23PxxueKjxPpkLXeXRwqf/lIDp4RQjxFlwiiqe', 2, '2016-12-21 14:33:04', '2016-12-21 14:33:30', 0, 1, NULL, 'Android', '0000', 0),
(29, '', NULL, '', '', '$2y$10$lw.7eKqLuX7dsFkZmPhP7uAWQTQw6BjAlhVhxJcb2E/mcUcsmEeoC', 2, '2016-12-22 05:55:12', '2016-12-22 06:01:18', 1, 1, NULL, NULL, NULL, 0),
(30, 'Argha', NULL, 'kumar', 'arghya@gmail.com', '$2y$10$HBqBx23L0atyABEUGiwDaeB8a99VDP/RdT7K5FVvF7nkV62Su945q', 2, '2016-12-22 06:01:02', '2016-12-22 06:02:50', 0, 1, NULL, NULL, NULL, 0),
(31, 'D', NULL, 'DDDd', 'dd@ddd.dd', '$2y$10$BLppbX5W1422LVMFsKNTE.20fIHVrnYcFlM8nftfprL8ZFY9xQp1C', 2, '2016-12-22 06:16:25', '2016-12-22 11:53:48', 0, 1, NULL, 'Android', '0000', 0),
(32, 'D', NULL, 'Emp', 'debarghya.unified1@gmail.com', '$2y$10$jtXpFk8hACZnnqkgTebyYuBzk/5G4doKf9xNhxLpbdJbrKO/QO.2y', 2, '2016-12-26 12:29:37', '2016-12-26 12:29:37', 0, 1, NULL, 'Android', '0000', 0),
(33, 'Debarghya', NULL, '', 'e@e.e', '$2y$10$WZiy9O9xeiYEj9C5KYqDieUp.Jonh0wxndzn4HAud6jMJArzDGYty', 3, '2016-12-26 12:58:28', '2016-12-26 13:17:50', 0, 1, NULL, 'Android', '0000', 0),
(34, '', NULL, '', 'aa@s.s', '$2y$10$jL0Totf2rV.HL7JO.JgMCOTtHUORaFtWwTbbnrBIw01wd60.TGHkC', 2, '2016-12-27 07:10:50', '2016-12-27 07:11:27', 0, 1, NULL, 'Android', '0000', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `emails_templates`
--
ALTER TABLE `emails_templates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forgot_password_requests`
--
ALTER TABLE `forgot_password_requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `reference_id` (`reference_id`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `sitesettings`
--
ALTER TABLE `sitesettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=217;
--
-- AUTO_INCREMENT for table `emails_templates`
--
ALTER TABLE `emails_templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `forgot_password_requests`
--
ALTER TABLE `forgot_password_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=27;
--
-- AUTO_INCREMENT for table `sitesettings`
--
ALTER TABLE `sitesettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `devices`
--
ALTER TABLE `devices`
  ADD CONSTRAINT `devices_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `forgot_password_requests`
--
ALTER TABLE `forgot_password_requests`
  ADD CONSTRAINT `forgot_password_requests_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
