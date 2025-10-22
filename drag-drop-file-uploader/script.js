document.addEventListener('DOMContentLoaded', function() {
            const uploadArea = document.getElementById('upload-area');
            const fileInput = document.getElementById('file-input');
            const fileList = document.getElementById('file-list');
            const uploadBtn = document.getElementById('upload-btn');
            
            let files = [];
            
          
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                uploadArea.addEventListener(eventName, preventDefaults, false);
                document.body.addEventListener(eventName, preventDefaults, false);
            });
            
          
            ['dragenter', 'dragover'].forEach(eventName => {
                uploadArea.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                uploadArea.addEventListener(eventName, unhighlight, false);
            });
            
           
            uploadArea.addEventListener('drop', handleDrop, false);
            
          
            uploadArea.addEventListener('click', () => {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', handleFiles, false);
            
            uploadBtn.addEventListener('click', uploadFiles);
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            function highlight() {
                uploadArea.classList.add('highlight');
            }
            
            function unhighlight() {
                uploadArea.classList.remove('highlight');
            }
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const droppedFiles = dt.files;
                
                handleFileList(droppedFiles);
            }
            
            function handleFiles() {
                handleFileList(fileInput.files);
            }
            
            function handleFileList(fileList) {
                if (fileList.length > 0) {
                    Array.from(fileList).forEach(file => {
                        if (!files.some(f => f.name === file.name && f.size === file.size)) {
                            files.push(file);
                            addFileToList(file);
                        }
                    });
                    
                    uploadBtn.disabled = false;
                }
            }
            
            function addFileToList(file) {
                const fileSize = formatFileSize(file.size);
                const fileId = `file-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.dataset.id = fileId;
                
                fileItem.innerHTML = `
                    <div class="file-info">
                        <div class="file-icon">📄</div>
                        <div>
                            <div class="file-name">${file.name}</div>
                            <div class="file-size">${fileSize}</div>
                            <div class="file-progress">
                                <div class="file-progress-bar" id="progress-${fileId}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="file-actions">
                        <div class="file-remove" data-id="${fileId}">❌</div>
                    </div>
                `;
                
                fileList.appendChild(fileItem);
                
                fileItem.querySelector('.file-remove').addEventListener('click', function() {
                    const id = this.dataset.id;
                    removeFile(id);
                });
            }
            
            function removeFile(id) {
                const fileItem = document.querySelector(`.file-item[data-id="${id}"]`);
                const fileName = fileItem.querySelector('.file-name').textContent;
                
                files = files.filter(file => file.name !== fileName);
                fileItem.remove();
                
                if (files.length === 0) {
                    uploadBtn.disabled = true;
                }
            }
            
            function uploadFiles() {
                if (files.length === 0) return;
                
                files.forEach((file, index) => {
                    const fileId = document.querySelectorAll('.file-item')[index].dataset.id;
                    const progressBar = document.getElementById(`progress-${fileId}`);
                    
                    // Simulate file upload
                    let progress = 0;
                    const interval = setInterval(() => {
                        progress += Math.random() * 10;
                        if (progress > 100) progress = 100;
                        
                        progressBar.style.width = `${progress}%`;
                        
                        if (progress === 100) {
                            clearInterval(interval);
                         
                        }
                    }, 200);
                });
            }
            
            function formatFileSize(bytes) {
                if (bytes === 0) return '0 Bytes';
                
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                
                return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
            }
        });