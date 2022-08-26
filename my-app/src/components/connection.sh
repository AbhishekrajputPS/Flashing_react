#!/usr/bin/expect -f
# set timeout -1

# set BoardFarm_USER [lindex $argv 0]
# set BoardFarm_IP [lindex $argv 1]
# set BoardFarm_PASS [lindex $argv 2]
# set DeviceUSB [lindex $argv 3]
# set Boot_With [lindex $argv 4]
# set Board_IP [lindex $argv 5]
# set MMC_BLOCK [lindex $argv 6]
# set BIN_PATH [lindex $argv 7]

spawn ssh -o StrictHostKeyChecking=no bhoopesh@192.168.2.50
expect "password:"
send "user@123\r"
expect "$"
send "ls\r"
intract


