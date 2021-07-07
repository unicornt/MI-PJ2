import random
import os
def random_delete(file_id):
    delete_list = []
    for n in code.keys():
        if dic[n]['pre'] == dic[n]['post'] and random.random() < 0.2:
            delete_list.append(n)
    f = open("proc_program/rewrite/17-0071.js", "r")
    st = 0
    output = ""
    sig = 0
    for l in f.readlines():
        if l[0:26] == 'codealchemist_log_type_pre':
            st = 1
            k = 28
            while l[k] in number:
                k += 1
            hval = l[28:k]
            if hval in delete_list:
                sig += 1
        elif l[0:27] == 'codealchemist_log_type_post':
            k = 29
            while l[k] in number:
                k += 1
            hval = l[29:k]
            if hval in delete_list:
                sig -= 1
        elif st == 1:
            if sig == 0:
                output += l
    f.close()
    f = open("output_program/" + str(file_id) + ".js", 'w')
    f.write(output)
    f.close()
    ret = os.popen("node " + "output_program/" + str(file_id) + ".js")
    print(ret)

random.seed()
f = open("output.txt", "r")
dic = {}
number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-']
for l in f.readlines():
    # print(l)
    if l[0] == '=':
        continue
    elif l[0] == '{':
        k = 10
        while l[k] in number:
            k += 1
        hval = l[10:k]
        print(hval)
        dic[hval] = {}
    else:
        if l[4] == 'r':
            pre = l[9:-2]
            print(pre)
            dic[hval]['pre'] = pre
        else:
            post = l[10:-2]
            print(post)
            dic[hval]['post']= post
f.close()
f = open("proc_program/rewrite/17-0071.js", "r")
code = {}
addlist = []
for l in f.readlines():
    if l[0:26] == 'codealchemist_log_type_pre':
        k = 28
        while l[k] in number:
            k += 1
        hval = l[28:k]
        addlist.append(hval)
        code[hval] = ""
    elif l[0:27] == 'codealchemist_log_type_post':
        k = 29
        while l[k] in number:
            k += 1
        hval = l[29:k]
        addlist.remove(hval)
    else:
        for n in addlist:
            code[n] += l
f.close()
for n in code.keys():
    print("------------------------------", dic[n]['pre'], dic[n]['post'])
    print(code[n])

file_id = 0
for i in range(0, 10):
    random_delete(i)