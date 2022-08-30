#!/usr/bin/expect -f
set timeout -1

set BoardFarm_USER [lindex $argv 0]
set BoardFarm_IP [lindex $argv 1]
set BoardFarm_PASS [lindex $argv 2]
set DeviceUSB [lindex $argv 3]
set Boot_With [lindex $argv 4]
set Board_IP [lindex $argv 5]
set MMC_BLOCK [lindex $argv 6]
set BIN_PATH [lindex $argv 7]

spawn ssh -o StrictHostKeyChecking=no $BoardFarm_USER@$BoardFarm_IP
expect "password:"
send "$BoardFarm_PASS\r"
expect "$BoardFarm_USER@"
# send "sudo minicom -b 115200 -D /dev/ttyUSB$DeviceUSB\r"
# expect "Welcome to minicom 2.7"
# send "\n\n\r"
# expect {
#     "#" {
#         send "reboot\r"
#     }
#     "login:" {
#        send "root\r"
#        expect "Password:"
#        send "root\r"
#        expect "#"
#        send "reboot\r"
#     }
#     "=>" {
#        send "boot\r"
#        expect "login:"
#        send "root\r"
#        expect "Password:"
#        send "root\r"
#        expect "#"
#        send "reboot\r"
        
#     }
# }
# # send "reboot\r"
# expect "Hit any key to stop autoboot"
# send "\n\r"
# expect "=>"
# send "edit boot_targets\r"
# expect "edit"
# if {$Boot_With == "sd"} {
#     send "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bmmc0\r"
#     expect "=>"
#     send "mmc read 0x80d00000 0x6800 0x800;fsl_mc lazyapply dpl 0x80d00000;run sd_bootcmd;\r"
# }
# if {$Boot_With == "eMMC"} {
#     send "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bmmc1\r"
#     expect "=>"
#     send "mmc dev 1;mmc read 0x80d00000 0x6800 0x800;fsl_mc lazyapply dpl 0x80d00000;run sd2_bootcmd;\r"
# }
# expect "TinyLinux login:"
# send "root\r"
# expect "#"
# send "ifconfig eth1 $Board_IP\r"
# expect "eth1: link becomes ready"
# send "\n\r"
# expect "#"
# send "flex-installer -i pf -d /dev/$MMC_BLOCK\r"
# expect "#"
# send "cd /var/volatile\r"
# expect "#"
# # send "scp -o StrictHostKeyChecking=no bhoopesh@192.168.2.50:$BIN_PATH/firmware_la1224rdb_uboot_sdboot.img .\r"
# # expect "password:"
# # send "user@123\r"
# # expect "#"
# send "scp -o StrictHostKeyChecking=no bhoopesh@192.168.2.50:$BIN_PATH/bootpartition_LS_arm64_lts_4.19.tgz .\r"
# expect "password:"
# send "user@123\r"
# expect "#"
# send "scp -o StrictHostKeyChecking=no bhoopesh@192.168.2.50:$BIN_PATH/rootfs_lsdk2004_ubuntu_main_arm64.tgz .\r"
# expect "password:"
# send "user@123\r"
# expect "#"
# send "ls -alt\r"
# expect "#"
# send "cp bootpartition_LS_arm64_lts_4.19.tgz /mnt/${MMC_BLOCK}p3\r"
# expect "#"
# # send "cp firmware_la1224rdb_uboot_sdboot.img /mnt/${MMC_BLOCK}p3\r"
# # expect "#"
# send "cp rootfs_lsdk2004_ubuntu_main_arm64.tgz /mnt/${MMC_BLOCK}p3\r"
# expect "#"
# send "ls -alt /mnt/${MMC_BLOCK}p3\r"
# expect "#"
# send "flex-installer -i install -b /mnt/${MMC_BLOCK}p3/bootpartition_LS_arm64_lts_4.19.tgz -r /mnt/${MMC_BLOCK}p3/rootfs_lsdk2004_ubuntu_main_arm64.tgz -m la1224rdb -d /dev/${MMC_BLOCK}\r"
# expect "#"
# send "reboot\r"
# expect "Hit any key to stop autoboot"
# send "\n\r"
# expect "=>"
# send "edit boot_targets\r"
# expect "edit"
# if {$Boot_With == "sd"} {
#     send "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bmmc0\r"
# }
# if {$Boot_With == "emmc"} {
#     send "\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\bmmc1\r"
# }
# expect "=>"
# send "boot\r"
# expect "login:"
# send "root\r"
# expect "Password:"
# send "root\r"
# expect "#"
# send "restool -m -v\r"
# expect "#"