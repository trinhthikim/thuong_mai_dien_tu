<?php
namespace News\Economic\Block;

use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;

class Index extends Template implements BlockInterface
{
    protected $_template = "news.phtml";
    protected function _prepareLayout()
    {
        return parent::_prepareLayout();
    }
}