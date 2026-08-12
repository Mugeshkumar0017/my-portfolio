key=True
while(key):
    import re
    password=input("enter your password:")
    if len(password)>=8:
        a="pass"
        if re.search(r'[A-Z]',password):
            b="pass"
            if re.search(r'[0-9]',password):
                c="pass"
                if re.search(r'[!@#$%^&*]',password):
                    d="pass"
                    if a and b and c and d=="pass":
                        print("strong")
                        key=False
                    else:
                        print("weak")
                        key=True
                else:
                    print("please enter any special char")
            else:
                print("please enter any integer value")
        else:
            print("please enter any one capital letter")
    else:
        print("please enter maximum 8 char")

