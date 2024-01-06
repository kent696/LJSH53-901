CREATE TABLE `mycounter` (
`id` int(11) NOT NULL auto_increment,
`Counter` int(11) NOT NULL,
`CounterLastDay` int(10) default NULL,
`CounterToday` int(10) default NULL,
`RecordDate` date NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk AUTO_INCREMENT=2 ;


--
-- 表的結構 `count`
--
CREATE TABLE IF NOT EXISTS `count` (
  `id` int(11) NOT NULL auto_increment,
  `aid` int(11) default NULL,
  `click_num` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk AUTO_INCREMENT=2 ;

function mobile(){
try{
document.createEvent("TouchEvent");
return true;
} catch(e) {
return false;
}
}
if(mobile()){
console.log('是手機');
}
else{
console.log('是電腦');
}


