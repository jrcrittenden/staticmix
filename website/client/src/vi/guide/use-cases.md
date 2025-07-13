# Các Trường Hợp Sử Dụng

Sức mạnh của Repomix nằm ở khả năng làm việc với các dịch vụ đăng ký như ChatGPT, Claude, Gemini, Grok mà không cần lo lắng về chi phí, đồng thời cung cấp bối cảnh codebase đầy đủ giúp loại bỏ nhu cầu khám phá file—làm cho việc phân tích nhanh hơn và thường chính xác hơn.

Với toàn bộ codebase có sẵn như bối cảnh, Repomix cho phép một loạt ứng dụng rộng rãi bao gồm lập kế hoạch triển khai, điều tra lỗi, kiểm tra bảo mật thư viện bên thứ ba, tạo tài liệu và nhiều hơn nữa.

## Phân Tích & Điều Tra & Tái Cấu Trúc Code

### Điều Tra Lỗi
Chia sẻ toàn bộ codebase của bạn với AI để xác định nguyên nhân gốc rễ của các vấn đề qua nhiều file và dependency.

```
Codebase này có vấn đề rò rỉ bộ nhớ trong server. Ứng dụng bị crash sau khi chạy trong vài giờ. Vui lòng phân tích toàn bộ codebase và xác định các nguyên nhân tiềm năng.
```

### Lập Kế Hoạch Triển Khai
Nhận lời khuyên triển khai toàn diện có xem xét đến toàn bộ kiến trúc codebase và các pattern hiện có của bạn.

```
Tôi muốn thêm xác thực người dùng vào ứng dụng này. Vui lòng xem xét cấu trúc codebase hiện tại và đề xuất cách tiếp cận tốt nhất phù hợp với kiến trúc hiện có.
```

### Hỗ Trợ Tái Cấu Trúc
Nhận các đề xuất tái cấu trúc duy trì tính nhất quán trên toàn bộ codebase của bạn.

```
Codebase này cần tái cấu trúc để cải thiện khả năng bảo trì. Vui lòng đề xuất cải tiến trong khi giữ nguyên chức năng hiện có.
```

### Review Code
Review code toàn diện có xem xét đến toàn bộ bối cảnh dự án.

```
Vui lòng review codebase này như thể bạn đang thực hiện một cuộc review code kỹ lưỡng. Tập trung vào chất lượng code, các vấn đề tiềm năng và đề xuất cải tiến.
```


## Tài Liệu & Kiến Thức

### Tạo Tài Liệu
Tạo tài liệu toàn diện bao phủ toàn bộ codebase của bạn.

```
Tạo tài liệu toàn diện cho codebase này, bao gồm tài liệu API, hướng dẫn thiết lập và hướng dẫn developer.
```

### Trích Xuất Kiến Thức
Trích xuất kiến thức kỹ thuật và các pattern từ codebase của bạn.

```
Trích xuất và tài liệu hóa các pattern kiến trúc chính, quyết định thiết kế và thực tiễn tốt nhất được sử dụng trong codebase này.
```

## Phân Tích Thư Viện Bên Thứ Ba

### Kiểm Tra Bảo Mật Dependency
Phân tích các thư viện bên thứ ba và dependency để tìm vấn đề bảo mật.

```
Vui lòng phân tích tất cả dependency bên thứ ba trong codebase này để tìm các lỗ hổng bảo mật tiềm năng và đề xuất các thay thế an toàn hơn khi cần thiết.
```

### Phân Tích Tích Hợp Thư Viện
Hiểu cách các thư viện bên ngoài được tích hợp vào codebase của bạn.

```
Phân tích cách codebase này tích hợp với các thư viện bên ngoài và đề xuất cải tiến để có khả năng bảo trì tốt hơn.
```

## Ví Dụ Thực Tế

### Quy Trình Tạo Code LLM
Một developer chia sẻ cách họ sử dụng Repomix để trích xuất bối cảnh code từ các codebase hiện có, sau đó tận dụng bối cảnh đó với các LLM như Claude và Aider cho cải tiến tăng dần, review code và tạo tài liệu tự động.

**Trường Hợp Sử Dụng**: Quy trình phát triển được tinh gọn với hỗ trợ AI
- Trích xuất bối cảnh codebase đầy đủ
- Cung cấp bối cảnh cho LLM để tạo code tốt hơn
- Duy trì tính nhất quán trên toàn bộ dự án

[Đọc quy trình đầy đủ →](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)

### Tạo Knowledge Datapack cho LLM
Các tác giả đang sử dụng Repomix để đóng gói nội dung viết của họ—blog, tài liệu và sách—thành các định dạng tương thích LLM, cho phép độc giả tương tác với chuyên môn của họ thông qua hệ thống Q&A được hỗ trợ bởi AI.

**Trường Hợp Sử Dụng**: Chia sẻ kiến thức và tài liệu tương tác
- Đóng gói tài liệu thành các định dạng thân thiện với AI
- Cho phép Q&A tương tác với nội dung
- Tạo cơ sở kiến thức toàn diện

[Tìm hiểu thêm về knowledge datapack →](https://lethain.com/competitive-advantage-author-llms/)