#include<stdio.h>
#pragma warning(disable:4996)
#pragma warning(disable:6031)
int main() {
    int t, n, ans, sum, pig[6];
    scanf("%d", &t);
    for (int i = 0; i < t; i++) {
        scanf("%d", &n);
        ans = sum = 0;
        for (int j = 0; j < 6; j++) {
            scanf("%d", &pig[j]);
            sum += pig[j];
        }
        while (sum <= n) {
            ans++;
            sum *= 4;
        }
        printf("%d\n", ans + 1);
    }
    return 0;
}