# ENVIRONMENT VARIABLES FOR WINDOWS

### We are going to copy the location of our Java 11 path into our Environment Variables. There are various tutorials, but here is my simple solution.

1. Locate in **File Explorer** the folder where Java 11 is installed:

- (./images/image0.png)

2. Open **Windows** button and click the **Settings** button
3. Should Open Settings:

- (./images/image1.png)

4. Search for _environment_.. **Select Edit the system environment variables**

- (./images/image2.png)

5. Should open System Properties. Next click **Advanced** tab and then click **Environment Variables** button:

- (./images/image3.png)

6. Environment Variables are opened now...

- (./images/image4.png)

7. Notice there are 2 sections:
   a. 1 is User variable
   b. 2 is System variables
8. Changes can be made to both. We will add _JAVA_HOME_ and add to _Path_ variables
9. If JAVA_HOME is not there, you can click New to create it.

- (./images/image5.png)

10. Write the variable name as _JAVA_HOME_ and variable value is the location path we found in the beginning. Copy and Paste the address in here.
11. Press **OK**
12. Next Select **Path** and click **Edit** and we are going to add the same variable to a list of existing sources

- (./images/image6.png)

14. If you don't see the directly on the list, you can click New to add it in.
15. Same Copy and Paste
16. Click **OK**
17. Click **OK** to close _Environment Variables_
18. Next we need to reboot the system
19. 1 Last Step to double check in terminal.
20. Open GitBash or Command Prompt
21. Type: **java -version**
22. Double check your output:

- GitBash:
  - (./images/image7.png)
- Command Prompt:
  - (./images/image8.png)
